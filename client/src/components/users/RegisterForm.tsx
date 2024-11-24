import { ROUTES } from "../../router/consts";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { TextField } from "./TextField";
import { registerInitialValues, registerValidationSchema } from "./schemas";
import { RegisterRequest } from "./types";
import { registerUser } from "./api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import styles from "./Form.module.scss";
import stylesButton from "./LoginButton.module.scss";

export function RegisterForm() {
  const navigate = useNavigate();

  const handleSubmit = async (formValues: RegisterRequest) => {
    try {
      await registerUser(formValues);
      toast.success("Registration is successful!");
      navigate(ROUTES.LOGIN);
    } catch (error) {
      const errorMsg = error as AxiosError<{ message: string }>;
      console.error(errorMsg);
      toast.error(errorMsg.response?.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={registerInitialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
        {({ values, errors, touched, dirty, isValid, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Register</h2>
            <TextField
              type="name"
              name="name"
              label="Name"
              value={values.name}
              error={errors.name}
              touched={touched.name}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
              Register
            </button>
            <div className={styles.link}>
              <Link to={ROUTES.LOGIN} className={styles.signUp}>
                Already have an account? Log in
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
