import React, {useState} from "react";
import "./AccountModal.scss";

const AccountModal = props => {
  const [isSignIn, setSignIn] = useState(true);

  const submitForm = event => {
    event.preventDefault();
  };

  return (
    <div className="modal fade" id="acc-modal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <ul className="modal-nav">
              <li>
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  style={{cursor: isSignIn ? null : "pointer"}}
                >
                  <i className="bi bi-lock" />
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSignIn(false);
                  }}
                  style={{cursor: isSignIn ? "pointer" : null}}
                >
                  <i className="bi bi-person" />
                  Sign up
                </button>
              </li>
            </ul>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {isSignIn ? (
              <>
                <form onSubmit={submitForm}>
                  {/* Email */}
                  <label className="form-label" htmlhtmlFor="email">
                    E-mail address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                  />
                  {/* Password */}
                  <label className="form-label" htmlhtmlFor="password">
                    Password
                  </label>
                  <input className="form-control" type="password" id="password" name="password" />

                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#">Forgot password?</a>
                  </div>
                  <button type="submit">Sign in</button>
                </form>
              </>
            ) : (
              <>
                <form onSubmit={submitForm}>
                  {/* Name */}
                  <label className="form-label" htmlhtmlFor="name">
                    Full name
                  </label>
                  <input className="form-control" type="name" id="name" name="name" placeholder="John Doe" />
                  {/* Email */}
                  <label className="form-label" htmlhtmlFor="email">
                    E-mail address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                  />
                  {/* Password */}
                  <label className="form-label" htmlhtmlFor="password">
                    Password
                  </label>
                  <input className="form-control" type="password" id="password" name="password" />
                  {/* Confirm Password */}
                  <label className="form-label" htmlhtmlFor="confirm-password">
                    Password
                  </label>
                  <input className="form-control" type="password" id="confirm-password" name="confirm-password" />
                  <button type="submit">Sign up</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
