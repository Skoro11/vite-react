import "./SignupPage.css"
function SignupPage(){
    return(
        <section className="mg-inline contact-page pd-in-30p pd-in-15-mb mg-bottom-5">
            <div className="links-home display-none-sm"><a className="home-link" href="/">Home</a> / Sign Up</div>

            <div className="flex space-between align-center">
            <div className="width-50 display-none-sm">
            <img className="width-100 " src="phone-side.png" alt="Phone" />
            </div>
            <div className="padding-left-5 min-width-30 signup-box">

               <h1 className="font-32px mg-bottom-5">Create an account</h1>
                <h5 className="mg-bottom-5">Enter your details below</h5>

            <input className="input-signup mg-bottom-5" placeholder="Name"></input>
            <br />
            <input type="email" className="input-signup mg-bottom-5" placeholder="Email or Phone Number"></input>
            <br />
            <input type="password"  className="input-signup mg-bottom-5" placeholder="Password"></input>
            <br />

        <button className="width-100 mg-bottom-5">Create Account</button>
        <br />
        <button className="signup-btn width-100"><img className="padding-right-5" src="Icon-Google.png" alt="Goggle"/>Sign up with Google</button>
        <br />
        <div className="flex"> 
        <p className="padding-right-5">Already have account? </p> <a href="/login" className="underlined"> Log in</a>
        </div>
        
            </div>
            </div>
        </section>
    )
}

export default SignupPage;