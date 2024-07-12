import { useState, useEffect } from "react";
import { registerService } from "../services/auth_service";
import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from "./Alert";

function RegisterForm() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [alert, setAlert] = useState({
    color: "",
    message: searchParams.get("message"),
  });

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const message = searchParams.get("message");
    switch (message) {
      case "email-exists":
        setAlert({ color: "danger", message: "Email already exists." });
        break;
      default:
        setAlert({ color: "", message: "" });
        break;
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({ color: "", message: "" });
    setSearchParams("");
    registerService(form)
      .then(() => navigate("/login?message=successful"))

      .catch((err) => {
        if (err.response && err.response.status === 409) {
          navigate("/register?message=email-exists");
        }
        setErrors(err.response?.data || {});
      });
  };

  return (
    <>
      <h1 className="display-1 mb-3">Register</h1>
      {alert.message && <Alert color={alert.color} message={alert.message} />}
      <div className="card shadow mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="username"
                id="username"
                className={`form-control ${
                  errors?.username ? "is-invalid" : ""
                }`}
                placeholder="username:"
                value={form.username}
                onChange={handleChange}
              />
              <label htmlFor="first_name">Username:</label>
              {errors?.username && (
                <span className="invalid-feedback">{errors.username}</span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                id="email"
                className={`form-control ${errors?.email ? "is-invalid" : ""}`}
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              {errors?.email && (
                <span className="invalid-feedback">{errors.email}</span>
              )}
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                id="password"
                className={`form-control ${
                  errors?.password ? "is-invalid" : ""
                }`}
                placeholder="Password:"
                value={form.password}
                onChange={handleChange}
              />
              <label htmlFor="password">Password:</label>
              {errors?.password && (
                <span className="invalid-feedback">{errors.password}</span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={`form-control ${
                  errors?.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm password:"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">Confirm password:</label>
              {errors?.confirmPassword && (
                <span className="invalid-feedback">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
