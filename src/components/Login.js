import { useState } from "react";
import "../assets/css/login.css";

function Login({ items, remove }) {
  const [first, setFirst] = useState(true);
  const closeLog = () => {
    document.getElementById("mySidelog").style.width = "100%";
    document.getElementById("mySidelog").style.height = "0";
  };

  const handleChange = () => {
    setFirst(!first);
  };

  return (
    <div id="mySidelog" className="sideLog">
      <a href="/" className="closebtn" onClick={closeLog}>
        &times;
      </a>
      <div className="container" id="container">
        <div className="form-log">
          <h3>Login</h3>
          <hr />
          {first ? (
            <div className="login-container">
              <div className="login-clean">
                <div className="container">
                  <button className="login-brand" onClick={handleChange}>
                    Customer
                  </button>
                </div>
              </div>
              <div className="login-clean">
                <div className="container">
                  <button className="login-brand" onClick={handleChange}>
                    Partner
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form >
                <div className="mb-3">
    <label for="exampleDropdownFormEmail2" className="form-label">Email address</label>
    <input type="email" className="form-control " id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
  </div>
  <div className="mb-3">
    <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
