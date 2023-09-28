import { Logo } from '../../public/logo.png';
import { google } from '../assets/Google svg.png';
import { fbook } from '../assets/Facebook svg.png';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = () => {
    if (email && password) {
      setIsRegistered(true);
      alert('Registration successful! You can now log in.');
    } else {
      alert('Please enter a username and password.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 p-3 d-none  d-sm-block">
          <div className="logo-container">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <img src={Login} alt="Welcome" className="img-fluid image" />
        </div>
        <div className="col-md-6 log-in p-3">
          <h2 className="title">Log in or Sign up</h2>
          <p className="subtitle">
            join millions of others in sharing successful moves on{' '}
            <span className="hmo">HelpMeOut</span>.
          </p>
          <div className="col-md-3 connect">
            <div className="col-sm-4 google">
              <img src={google} alt="google" />
              <p className="p-5">Continue with Google</p>
            </div>
            <div className="col-sm-4 fbook">
              <img src={fbook} alt="facebook" />
            </div>
          </div>
          <form className="sign-up-form">
            <div className="input-field">
              <input
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <input
              onClick={handleSignup}
              className="btn btn-primary text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
          {isRegistered && (
            <p className="success-message">
              Registration successful! Please Wait..
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
