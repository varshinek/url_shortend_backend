const express = require("express");
const { sendRegisterMail, checkRegisterUser, userlogin, resetPassToken, verifyResetPassToken, createNewPass } = require("../Contorllers/authController");

const router = express.Router();

router.post("/sendRegisterMail", sendRegisterMail);

router.get('/checkRegisterUser/:registerToken', checkRegisterUser);

router.post("/login", userlogin);

router.post('/resetPass', resetPassToken);

router.get('/checkResetPass/:passResetToken',verifyResetPassToken);

router.put('/updatePass/:passResetToken', createNewPass);

module.exports = router;
