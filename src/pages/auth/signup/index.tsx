import { Formik, Field, Form, useFormik } from 'formik';

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {},
  });

  const onSubmitHndlr = () => {};

  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
