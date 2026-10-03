import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onTouched" });

  // Called ONLY when the form passes validation
  function onSubmit(data) {
    setLoginError("");

    // Check the entered values against the demo user stored in localStorage
    const result = loginUser(data.email, data.password);

    if (!result.ok) {
      setLoginError(result.message);
      return;
    }

    setSuccess(true);
    setTimeout(() => navigate("/dashboard"), 1200);
  }

  // Already logged in? Go straight to the dashboard
  if (user && !success) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <section className="section form-page">
      <div className="container">
        <h2 className="section-title">Login to EventEase</h2>

        <div className="form-box">
          <p className="demo-note">
            <strong>Demo only:</strong> this login checks the demo account saved
            in your browser's localStorage. It is not real authentication.
          </p>

          {success && (
            <div className="alert alert-success">
              <strong>Login Successful</strong> Opening your dashboard...
            </div>
          )}

          {loginError && <div className="alert alert-error">{loginError}</div>}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input
                id="loginEmail"
                type="email"
                placeholder="you@example.com"
                className={errors.email ? "invalid" : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: "Enter a valid email address"
                  }
                })}
              />
              {errors.email && <span className="field-error">{errors.email.message}</span>}
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                id="loginPassword"
                type="password"
                placeholder="Enter your demo password"
                autoComplete="current-password"
                className={errors.password ? "invalid" : ""}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <span className="field-error">{errors.password.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-full">Login</button>
          </form>

          <p className="form-footer">
            New to EventEase? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
