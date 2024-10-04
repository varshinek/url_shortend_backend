# End-Point Explanation:

I. USER AUTHENTICATION:
  
  1. /auth/sendRegisterMail --> Create the New User Data and send the registration link to activate account. [ 2- STEP VERIFICATION PURPOSE ] [ REQUIRED - firstname, lastname, email, password ]
  2. /auth/checkRegisterUser/:registerToken --> To confirm the registration and account activation.
  3. /auth/login --> To login the registered User after verifying the registered account. [ Required : email, password ]
  4. /auth/resetPass --> Verify user email and send password reset token with url. [ Required : email
  5. /auth/checkResetPass/:passResetToken --> Verify token and redirect to update password page.
  6. /auth/updatePass/:passResetToken --> Update new Password. [ Required : newPassword ]

II. URL ROUTES [ REQUIRED: BEARER TOKEN -- CREATE WHEN LOG-IN ]:

  1. /url/get --> Get all created Shorten URL's by Logged-In User.
  2. /url/create --> Create new Shorten URL.
  3. /url/redirect/:shortURL --> To increase the URL Click Count and redirect User to Actual URL.
  4. /url/delete/:UrlId --> To delete the URL by its ID.

# npm requires:

1. express --> To run node server
2. jsonwebtoken --> To create unique bearer token
3. bcryptjs --> To encrypt password before storing in DB
4. mongoose --> node to DB connect
5. nodemailer --> To generate Authentication mails
6. body-parser --> To make incoming req as json
7. dotenv
8. cors [ for local testing purpose ]
