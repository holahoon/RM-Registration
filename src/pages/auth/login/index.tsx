import { Formik, Field, Form, useFormik } from 'formik';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: LoginInterface) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onSubmitHndlr = () => {};

  console.log(formik);
  return (
    <div>
      <h2>Login</h2>

      <form>
        <label htmlFor='email'>Email</label>
        <input id='email' />
      </form>
    </div>
  );
}
