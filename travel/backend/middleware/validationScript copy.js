const { check, validationResult } = require('express-validator')

exports.validationMethod = (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}
exports.userRules = [
    check('firstName',"firstName is required...").notEmpty()
    .isLength({min:3}).withMessage("firstname must be atleast 3 characters")
    .not().isIn(['admin','test','dog','god', 'abc']).withMessage('username not allowed'),
    check('lastName',"LastName is required...").notEmpty()
    .isLength({min:3}).withMessage("lastname must be atleast 3 characters")
    .not().isIn(['admin','test','dog','god', 'abc']).withMessage('username not allowed'),
    check('email',"E-mail is required").notEmpty()
        .isEmail().withMessage("Email format incorrect"),
    check('password',"Password is required")
        .matches(/[a-z]/).withMessage('Password must consist atleast 1 lowercase alphabet')
        .matches(/[A-Z]/).withMessage('Password must consist atleast 1 uppercase alphabet')
        .matches(/[0-9]/).withMessage('Password must consist atleast 1 number')
        .matches(/[!@#$%-]/).withMessage('Password must consist atleast 1 special character')
        .isLength({min:8}).withMessage('password must be atleast 8 characters')
        .isLength({max:20}).withMessage('password must be greater than 20 characters')
]


exports.passwordRules=[
    check('password',"Password is required")
    .matches(/[a-z]/).withMessage('Password must consist atleast 1 lowercase alphabet')
    .matches(/[A-Z]/).withMessage('Password must consist atleast 1 uppercase alphabet')
    .matches(/[0-9]/).withMessage('Password must consist atleast 1 number')
    .matches(/[!@#$%-]/).withMessage('Password must consist atleast 1 special character')
    .isLength({min:8}).withMessage('password must be atleast 8 characters')
    .isLength({max:20}).withMessage('password must be greater than 20 characters')
]