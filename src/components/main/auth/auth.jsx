import SignUp from './signUp';
import SignIn from './login';
import './authStyle.css';
import { useState } from 'react';

const Auth = () => {
  const [chooseAuth, setChooseAuth] = useState(true) // set auth display
  const [isActive, setIsActive] = useState(true) // set active className
  const [hideAuth, setHideAuth] = useState(false) // hide auth when auth button is clicked

  // handle signIn click
  const handleAuth1 = () => {
    setChooseAuth(false)
    setIsActive(false)
  }

  // handle signUp click
  const handleAuth2 = () => {
    setChooseAuth(true)
    setIsActive(true)
  }


  return (
    <div className={hideAuth ? 'hide' : 'auth'}>

      <div className="auth-nav">

        {/* signIn */}
        <div className={isActive ? 'auths' : 'auths actve'}
          onClick={handleAuth1} >
            <h2>Sign In</h2>
        </div>

        {/* signIn */}
        <div className={isActive ? 'auths actve' : 'auths'}
          onClick={handleAuth2} >
            <h2>Sign Up</h2>
        </div>
      </div>

      {/* signIn or signUp display */}
      {chooseAuth ? 
        <SignUp hideAuth={hideAuth} setHideAuth={setHideAuth} /> 
        : 
        <SignIn hideAuth={hideAuth} setHideAuth={setHideAuth} />
      }
    </div>
  )
}

export default Auth