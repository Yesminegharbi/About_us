import './signin.css'
const Signin=()=>
{
    return(
        <div className='signin'>
        <form>
        <fieldset>
            <h3>SIGN IN</h3>

            <label for="mail">E-mail <em>*</em></label>
            <input type="email" placeholder="example@gmail.com" id="mail" required="" pattern="[a-zA-Z]*.[a-zA-Z]*@gmail.com"/>

            <label for="password">Password <em>*</em></label>
            <input type="password" placeholder="Input your password" id="password" required=""/>
            <button class="lost">Lost Password ?</button>
            <button class="sign">SIGN IN</button>
            <p>
                <h5>Need assistance ?  please contact our  
                    <a href=""> 
                     SUPPORT TEAM
                    </a>
                    
                    </h5>
            </p>
        </fieldset>
        
    </form>
</div>

    )
}
export default Signin