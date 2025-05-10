import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styles from "../styles/Login.module.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const newErrors = {
      email: email ? "" : "Email is required",
      password: password ? "" : "Password is required",
    };

    setErrors(newErrors);

    if (!email || !password) {
      return;
    }

    login();
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headText}>Hybrix</h1>
      <div className={styles.left}>
        <h2>Start your journey with us.</h2>
        <p>
          It brings together your tasks, projects, timelines, files and more.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.formBox}>
          <h2>Welcome,</h2>
          <p>Login to continue to ENTRA.</p>

          {/* Email */}
          <label>Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            className={`${styles.input} ${
              errors.email ? styles.errorInput : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className={styles.errorMsg}>{errors.email}</div>
          )}

          {/* Password */}
          <label>Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`${styles.input} ${
                errors.password ? styles.errorInput : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.password && (
            <div className={styles.errorMsg}>{errors.password}</div>
          )}

          {/* Options */}
          <div className={styles.options}>
            <a>Forgot Your Password?</a>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>

          <button onClick={handleLogin} className={styles.loginBtn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
