import { useContext, useState } from "react";
import { ROUTES } from "../../router/consts";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { TextField } from "./TextField";
import { loginInitialValues, loginValidationSchema } from "./schemas";
import { LoginRequest } from "./types";
import { UserContext } from "../../contexts/UserContext";
import { loginUser } from "./api";
import { AxiosError } from "axios";
import styles from "./Form.module.scss";
import stylesButton from "./LoginButton.module.scss";

export function LoginForm() {
  const { login } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (formValues: LoginRequest) => {
    try {
      const response = await loginUser(formValues);
      login(response);
      navigate(ROUTES.HOME);
    } catch (error) {
      const errorMsg = error as AxiosError<{ message: string }>;
      console.error(errorMsg);
      setError(errorMsg.response?.data.message ?? "");
    }
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
        {({ values, errors, touched, dirty, isValid, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Login</h2>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <TextField
              type="password"
              name="password"
              label="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={!dirty || !isValid || isSubmitting} style={{ marginTop: "1rem" }} className={stylesButton.button}>
              Log in
            </button>
            <div className={styles.link}>
              <Link to={ROUTES.REGISTER} className={styles.signUp}>
                Do not have an account? Sign up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
