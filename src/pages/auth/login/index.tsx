import { useFormik } from 'formik';
import * as Yup from 'yup';

import { passwordRegex, passWordErrorMsg } from 'utils/constants';

const yupValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, passWordErrorMsg.minimum)
    .matches(passwordRegex, passWordErrorMsg.contain)
    .required('Password is required'),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupValidationSchema,
    onSubmit: (values: Login) => {
      onSubmitHndlr(values);
    },
  });

  const onSubmitHndlr = (values: Login) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            name='email'
            placeholder='email'
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
