function LoginPage(){
    return(
        <section className="mg-inline contact-page pd-in-30p pd-in-15-mb mg-bottom-5">
        <div className="links-home display-none-sm"><a className="home-link" href="/">Home</a> / Login</div>

        <div className="flex space-between align-center">
        <div className="width-50 display-none-sm">
        <img className="width-100" src="phone-side.png" alt="Phone" />
        </div>
        <div className="padding-left-5 min-width-30 signup-box ">

           <h1 className="font-32px mg-bottom-5">Log in to Exclusive</h1>
            <h5 className="mg-bottom-5">Enter your details below</h5>

        <input type="email" className="input-signup mg-bottom-5" placeholder="Email or Phone Number"></input>
        <br />
        <input type="password"  className="input-signup mg-bottom-5" placeholder="Password"></input>
        <br />

    
    <div className="flex align-center"> 
    <button className="width-30 mg-right-5">Login</button>
    <p className="color-red">Forgot Password? </p> 
    </div>
    
        </div>
        </div>
    </section>
    )
}
export default LoginPage;
