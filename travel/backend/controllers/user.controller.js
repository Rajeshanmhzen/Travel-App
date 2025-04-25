const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Token = require("../models/token.model")
const crypto = require("crypto")
const emailSender = require("../middleware/emailSender")

exports.register = async(req,res)=> {
    try {
    const {firstName, lastName, email, phone, password} = req.body

    let user = await User.findOne({ email })

    if(user) {
        return res.status(400).json({error:"email is already register"})
    }
    
    const salt = bcrypt.genSaltSync(10);
    let hashPassword = await bcrypt.hashSync(password, salt)
    
    if(!hashPassword){    
        throw new Error("Something is wrong")
    }
   
    user = await  User.create({
        firstName, 
        lastName, 
        email, 
        phone,
        password:hashPassword
    })
    if(!user) {
        return res.status(400).josn({error:"somthing went wrong!"})
    }
    let tokenObj = await Token.create({
        token:crypto.randomBytes(24).toString('hex'),
        user:user._id
    })
    if(!tokenObj) {
        return res.status(400).json({error:"somthing went wrong"})
    }
    const URL = `${process.env.FRONTEND_URL}/verify/${tokenObj.token}`
    emailSender({
        from:'noreply@somthing.com',
        to:email,
        subject:'verification E-email',
        text:`Click the following link to activate your account. ${URL}`,
        html: `<a href='${URL}'> <button> Verify Now </button> </a>`
    })
    

    res.status(201).json({
        data : user,
        success : true,
        error : false,
        message : "user registered successfully"
    })

}  catch(err){
    res.json({
        message : err.message || err  ,
        error : true,
        success : false,
    })
}
}

exports.login = async(req,res)=> {
    try{
        const {email, password} = req.body
        if(!email) {
            throw new Error("please provide email")
        }
        if(!password) {
            throw new Error("please provide password")
        }
        if(password.length <7) {
            throw new Error("password must contain atleast 7 character")
        }
        let user = await User.findOne({email})
        if(user.locktime && user.lockUntil > Date.now()) {
            const remainingTime = (user.locktime - Date.now()) / 1000
            return res.sstatus(400).json({
                messsage: `Account is locked . Please try again in ${Math.ceil(remainingTime)} seconds.`,
                error:true,
                success:false
            })
        }
        const checkPassword = await bcrypt.compare(password, user.password)

        if(checkPassword) {
            user.failedAttmpts = 0
            user.lockUntil = null

            await user.save()
            const tokenData = {
                userId : user._id,
                email:user.email,
                verified:  user.verified
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {expiresIn:'1d'})

            user= {
                _id: user._id,
                firstName : user.firstName,
                lastName: user.lastName,
                email:user.email
            }
            res.cookie("token", token, {
                maxAge: 1*24*60*60*1000,
                httpsOnly: process.env.NODE_ENV === "production",
                secure: process.env.NODE_ENV === "production",
                sameSite: 'strict'
            }).status(200).json({
                message: `welcome back ${user.firstName} ${user.lastName}`,
                user,
                error:false,
                success:true
            })
            return;
            
        }
        user.failedAttempts +=1
        // const lockTimes = [30, 3*60, 5*60, 10*60]
        const lockTimes = [1,5] // this is for the testing
        const maxAttempts = lockTimes.length;

        let lockTime =0
        for(let i =0; i< maxAttempts; i++) {
            if(user.failedAttempts <= (i + 1)* 3) {
                lockTime = lockTimes[i]
                break;
            }
        }
        if(user.failedAttempts > maxAttempts*3) {
            lockTime = lockTimes[maxAttempts - 1]
        }
        if(lockTime > 0) {
            user.lockUntil = Date.now() + lockTime * 1000
        }
        await user.save()

        return res.status(400).json({
            message:`Incorrect password. Attempt ${user.failedAttempts}/3.Please try again after the lock period ${lockTime}`
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

exports.verifyEmail = async(req,res)=> {
    let tokenObj = await Token.findOne({token : req.params.token})
    if(!tokenObj) {
        return res.status(400).json({error:"Invalid toke or token may be expired!"})
    } 
    let user = await User.findById(tokenObj.user)
    if(!user) {
        return res.status(400).json({error:"User not found"})
    }
    if(user.isVerified) {
        return res.status(400).json({error:" user already verified.Login to continue "})
    }
    user.isVerified = true
    user = await user.save()
    if(!user ) {
        return res.status(400).json({error:"something went wrong"})
    }
    res.send({message: "user verified successfully"})
}

exports.forgetPassword = async(req,res)=> {
     let user = await User.findOne({email:req.body.email})
     if(!user) {
        return res.status(400).json(({error:"Email not registered"}))
     }
     const otpCode = Math.floor(100000 + Math.random()*900000)
     let tokenObj = await Token.create({
        token:crypto.randomBytes(16).toString('hex'),
        otp : otpCode.toString(),
        user:user._id
     })
     const URL = `${process.env.FRONTEND_URL}/resetpassword/${tokenObj.token}`
     emailSender({
        from : 'noreply@somthing.com',
        to:req.body.email,
        subject:'password reset email',
        text: 'Click on the following link to reset the password',
        html:`
         <p>You can reset your password using either of the following methods:</p>
    <ul>
      <li><strong>Link:</strong> <a href="${URL}">verify</a></li>
      <li><strong>OTP Code:</strong> ${otpCode}</li>
    </ul>
    <p>This link/code will expire in 10 minutes.</p>
        `
     })
     res.send({messag:"password reset link has been sent to you your email."})

}
exports.verifyResetOTP = async (req, res) => {
    const { token } = req.params;
    const { otp } = req.body;
  
    const tokenDoc = await Token.findOne({ token, otp }).populate("user");
  
    if (!tokenDoc) {
      return res.status(400).json({ error: "Invalid token or OTP" });
    }
  
    // Optional: Mark token as verified (if you want to persist state)
    tokenDoc.verified = true;
    await tokenDoc.save();
  
    res.json({ message: "OTP verified successfully. You may now reset your password." });
  };

exports.resetPassword = async(req,res)=> {
    const { token } = req.params;
  const { password } = req.body;

  const tokenDoc = await Token.findOne({ token }).populate("user");

  if (!tokenDoc || !tokenDoc.verified) {
    return res.status(400).json({ error: "Token not verified. OTP is required." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  tokenDoc.user.password = hashedPassword;
  await tokenDoc.user.save();

  await Token.deleteOne({ _id: tokenDoc._id });

  res.json({ message: "Password reset successfully." });
}
exports.resendVerification = async(req,res)=> {
    let user = await User.findOne({email:req.body.email})
    if(!user) {
        return res.status(400).json({error:'email is not registered'})
    }
    if(user.isVerified) {
        return res.status(400).json({error:"user is already verified"})
    }
    let tokenObj = await Token.create({
        token:crypto.randomBytes(16).toString('hex'),
        user:user._id
    })
    const URL = `${process.env.FRONTEND_URL}/verify/${tokenObj.token}`

    emailSender({
        from: 'noreply@something.com',
        to: req.body.email,
        subject: 'verification email',
        text: `Click on the following link to verify. ${URL} `,
        html: `<a href='${URL}'><button>verify Password </button></a>`
    })
    res.send({message:"verification link has been send to your email"})
}
exports.logout = async(req,res)=> {
    res.clearCookie()
    res.send({message:"Logout successfully"})
}