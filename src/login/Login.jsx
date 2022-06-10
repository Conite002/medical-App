import React from 'react'

const Login = (props) => {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin, 
    handleSignup, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError} = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label htmlFor="">Username</label>
        <input type="text" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} required  />
        <p className="errowMsg"> {emailError} </p>

        <label htmlFor="">Password</label>
        <input type="password" required value={password} onChange = { (e) => setPassword(e.target.value)} />
        <p className="errorMsg">{passwordError} </p>

        <div className="btnContainer">
          { hasAccount ? (
              <>
                <button onClick={handleLogin}> Sign in</button>
                <p>Déjà de compte ? <span onClick={() => setHasAccount(!hasAccount)}>Se connecter</span></p>
              </>
            ) : (
              <>
                <button onClick={handleSignup}> Sign Up</button>
                <p>Pas de compte ? <span onClick={() => setHasAccount(!hasAccount)}>S'inscrire</span></p>
              </>
            )}
        </div>
      </div>
    </section>
  )
}

export default Login;