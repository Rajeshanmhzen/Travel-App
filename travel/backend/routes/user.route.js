const express = require("express")
const { register, login, logout, verifyEmail, forgetPassword, resetPassword, resendVerification, verifyResetOTP } = require("../controllers/user.controller")
const { userRules, validationMethod } = require("../middleware/validationScript copy")


const router = express.Router()

router.post("/register",userRules,validationMethod, register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/verify/:token", verifyEmail)
router.post("/forgetpassword", forgetPassword)
router.post("/verify-reset/:token", verifyResetOTP)
router.post("/resetpassword/:token", resetPassword)
router.post("/resendverification", resendVerification)


module.exports = router