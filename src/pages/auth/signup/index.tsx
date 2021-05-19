import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';

import {
  passwordRegex,
  nameRegex,
  dateRegex,
  yearRegex,
  passWordErrorMsg,
  nameErrorMsg,
} from 'utils/constants';

const yupValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, passWordErrorMsg.minimum)
    .matches(passwordRegex, passWordErrorMsg.contain)
    .required('Password is required'),
  name: Yup.object({
    first: Yup.string().matches(nameRegex, nameErrorMsg).required('First name is required'),
    last: Yup.string().matches(nameRegex, nameErrorMsg).required('First name is required'),
  }),
  dob: Yup.object({
    month: Yup.string().matches(dateRegex).required(),
    day: Yup.string().matches(dateRegex).required(),
    yeah: Yup.string().matches(yearRegex).required(),
  }),
});

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: {
        first: '',
        last: '',
      },
      dob: {
        month: '',
        day: '',
        year: '',
      },
    },
    validationSchema: yupValidationSchema,
    onSubmit: (values: SignUp) => {
      onSubmitHndlr(values);
    },
  });

  const onSubmitHndlr = (values: SignUp) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' {...formik.getFieldProps('email')} />
        </div>
        <div>
          <label htmlFor='email'>Password</label>
          <input id='password' type='password' {...formik.getFieldProps('password')} />
        </div>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            type='text'
            name='firstName'
            value={formik.values.name.first}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            type='text'
            name='lastName'
            value={formik.values.name.last}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor='dob'>Date of Birth</label>
          <select name='dob' id='dob'>
            <option value=''></option>
          </select>
        </div>
      </form>
    </div>
  );
}
