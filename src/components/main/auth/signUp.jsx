function SignUp( {hideAuth, setHideAuth} ) {
    const handleClick = () => {
        setHideAuth(!hideAuth)
    }


  return (
    <div className="sign-up-1">
        
        <form action="" className="sign-up-form">
            <input 
                className="auth-input" 
                placeholder="Email" 
                type="email" 
            />
            <input 
                className="auth-input" 
                placeholder="Password ( 6 - 18 characters)" 
                type="password" 
            />
            <input 
                className="auth-input" 
                placeholder="Confirm Password" 
                type="password" 
            />
            <input 
                className='auth-submit'
                type="button" 
                value="Continue"
                onClick={handleClick}
            />
        </form>
        <div className="auth-divider">
            <hr />
            <p>Or</p>
            <hr />
        </div>
        <button 
            className="auth-button"
            ><i></i>
            <p>Sign up with Google</p>
        </button>
        <button 
            className="auth-button"
            ><i></i>
            <p>Sign up with Apple</p>
        </button>
    </div>
  )
}

export default SignUp