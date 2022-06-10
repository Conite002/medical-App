import React from 'react'
import './testLogin.css'


const TestLogin = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-8">
          <div className="home">
            <div className="home-title">
              <h1>clinique</h1>
              <span>Olory togbe</span>
            </div>
            <div className="home-description">

            </div>
            <div className="button">
              <button ></button>
            </div>
          </div>
          
        </div>

        <div className="col-4">
        <div class="screen">
                <div class="screen__content">
                  <form class="login">
                    <div class="login__field">
                      <i class="login__icon fas fa-user"></i>
                      <input type="text" class="login__input" placeholder="User name / Email"/>
                    </div>
                    <div class="login__field">
                      <i class="login__icon fas fa-lock"></i>
                      <input type="password" class="login__input" placeholder="Password" />
                    </div>
                    <button class="button login__submit">
                      <span class="button__text">connexion</span>
                      <i class="button__icon fas fa-chevron-right"></i>
                    </button>				
                  </form>
                  {/* <div class="social-login">
                    <h3>log in via</h3>
                    <div class="social-icons">
                      <a href="#" class="social-login__icon fab fa-instagram"></a>
                      <a href="#" class="social-login__icon fab fa-facebook"></a>
                      <a href="#" class="social-login__icon fab fa-twitter"></a>
                    </div>
                  </div> */}
                </div>
                <div class="screen__background">
                  <span class="screen__background__shape screen__background__shape4"></span>
                  <span class="screen__background__shape screen__background__shape3"></span>		
                  <span class="screen__background__shape screen__background__shape2"></span>
                  <span class="screen__background__shape screen__background__shape1"></span>
                </div>		
              </div>
        </div>
        {/* <div className="col-4">
          <div className="screen">
            <div className="login">
              <div className="login-title">
                <h4>Se connecter</h4>
              </div>
                <form>
                  <div className="login-input">
                    <input type="text" className='' placeholder='user'/>
                  </div>

                  <div className="login-input">
                    <input type="password" className='' placeholder='password'/>
                  </div>

                  <div className="login-submit">
                  <button class="button login__submit">
                      <span class="button__text">Log In Now</span>
                      <i class="button__icon fas fa-chevron-right"></i>
                    </button>	
                  </div>
                </form>
                  
            </div>
          </div>

          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>		
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>	
        </div> */}
      </div>
    </div>
  )
}

export default TestLogin