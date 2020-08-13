THREE ROLES Exists: user, doctor, admin, superAdmin

1. A customer can register on site with Phone number, and password. If success send them a token. 
2. Check if customer already exists by phone number, if exists Notify them
3. After registered, ask them to fill the other data like address, city etc - which are not mandatory fileds
the above will be a PATCH request to Customers table
4. Make the customer logout by making isActive false in the DB - authtoken for that User/doctor
5. User can login again, - Check if user is already login : then reject login - Saying it is already active, else send them token - after verifying number and hashed password
6. A Doctor can be only registered by a Staff Member 
7. A user can create his own, A staff member can create any number of users with unique Phone number
8. A user/doctor/staff member can change the password only after Successful OTP to the registered number.
9. Forgot password, send OTP verify - then send jwt token to continue with new password
10. No admin can delete doctor, but can deactivate them
11. No one can delete any user except with self autherization of OTP. 
12. All passwords are encrypted 


To register user, we need to check if phone nummber exists ? FindOne ? 

find One user by email
Forgot password email implement
register a doctor separately - register a user separately

2. do not register duplicate email id
3. Initially not necessary  ?? send jwt token generated after user requests for signin - and store in DB auth_tokens
4. ask client to send Jwt token on every request, if verified then send the response - verify by expiration time and user ID
5. check if the user can save same token, for multiple tabs (Is it required like bank - no new tab)
6. Login with  phone number too...  request.body.phone ? then verify user number in user DB
7. Ask for common loopholes
8. how do you logout - req.session.user = null ?
9. send a email, if forgot-user api is hit
10. EDIT - update USER details - except phone number (one phone - one user)
