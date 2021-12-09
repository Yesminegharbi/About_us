import React from 'react';
import './SIGN_UP.css'
const SignUp = () => {
  return (
    <div className='signup'>
    <div class="background">
        <div class="shape"></div>
        <input type="file" id="avatar" name="avatar" accept="image/jpeg,image/png" required=""/>
    </div>
    <form>
        <h3>SIGN UP</h3>

        <label for="mail">E-mail <em>*</em></label>
        <input type="email" placeholder="example@gmail.com" id="mail" required="" pattern="[a-zA-Z]*.[a-zA-Z]*@gmail.com"/>

        <label for="name">Full Name <em>*</em></label>
        <input type="text" placeholder="Input your full name" required=""/>

        <label for="password">Password <em>*</em></label>
        <input type="password" placeholder="Input your password" id="password" required=""/>

        <label for="confimation">Confirm Password <em>*</em></label>
        <input type="password" placeholder="Password confimation" id="confimation" required=""/>

        <label for="phone">Phone Number <em>*</em></label>
        <input type="text" placeholder="+216xxxxxxxx" id="phone" required="" pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"/>

        <label for="postal">Postal Code <em>*</em></label>
        <input type="text" placeholder="xxxx" id="postal" required="" pattern="[0-9][0-9][0-9][0-9]"/>

        <button class="register">SIGN UP</button>
    </form>
</div>
  );
};
  
export default SignUp;