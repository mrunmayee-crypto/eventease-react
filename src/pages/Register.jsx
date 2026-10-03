import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  // useForm() gives us the tools to build and validate the form
  const {
    register,                 // connects an input to the form
    handleSubmit,             // runs validation, then calls our function
    watch,                    // reads a field's current value
    reset,                    // clears the form
    formState: { errors }     // validation error messages
  } = useForm({ mode: "onTouched" });

  // Needed to compare Confirm Password with Password
  const passwordValue = watch("password");

  // Called ONLY when all validation rules pass
  function onSubmit(data) {
    registerUser({
      name: data.name.trim(),
      email: data.email,
      password: data.password
    });

    setSuccess(true);
    reset();
    setTimeout(() => navigate("/login"), 1800);
  }

  return (
    <section className="section form-page">
      <div className="container">
        <h2 className="section-title">Create an Account</h2>

        <div className="form-box">
          <p className="demo-note">
            <strong>Demo only:</strong> your details are saved in this browser's
            localStorage. Do not enter a real password.
          </p>

          {success && (
            <div className="alert alert-success">
              <strong>Registration Successful!</strong> Demo account saved in
              localStorage. Redirecting to Login...
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* FULL NAME */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className={errors.name ? "invalid" : ""}
                {...register("name", {
                  required: "Full name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" },
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Name can contain only letters and spaces"
                  }
                })}
              />
              {errors.name && <span className="field-error">{errors.name.message}</span>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
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
              <label htmlFor="password">Password (demo)</label>
              <input
                id="password"
                type="password"
                placeholder="Minimum 6 characters"
                autoComplete="new-password"
                className={errors.password ? "invalid" : ""}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <span className="field-error">{errors.password.message}</span>}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                className={errors.confirmPassword ? "invalid" : ""}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  // custom rule: returns true when valid, or an error message
                  validate: (value) => value === passwordValue || "Passwords do not match"
                })}
              />
              {errors.confirmPassword && (
                <span className="field-error">{errors.confirmPassword.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-full">Register</button>
          </form>

          <p className="form-footer">
            Already registered? <Link to="/login">Login here</Link>
          </p>
          <p className="small-note">
            Registering again replaces the previous demo account.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
