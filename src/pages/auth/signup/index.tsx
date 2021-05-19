import { Formik, Field, Form, useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//https://reactdatepicker.com/#example-year-dropdown

import {
  passwordRegex,
  nameRegex,
  dateRegex,
  yearRegex,
  passWordErrorMsg,
  nameErrorMsg,
} from 'utils/constants';
// import { generateNumbers } from 'utils/fns';

const yupValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, passWordErrorMsg.minimum)
    .matches(passwordRegex, passWordErrorMsg.contain)
    .required('Password is required'),
  name: Yup.object().shape({
    firstName: Yup.string().matches(nameRegex, nameErrorMsg).required('First name is required'),
    lastName: Yup.string().matches(nameRegex, nameErrorMsg).required('Last name is required'),
  }),
  dob: Yup.date().required('Please select a date'),
});

export default function Signup() {
  const initialValues = {
    email: '',
    password: '',
    name: {
      firstName: '',
      lastName: '',
    },
    dob: null,
  };

  const onSubmitHndlr = (values: any) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <Formik
        initialValues={initialValues}
        // validationSchema={yupValidationSchema}
        onSubmit={(values) => onSubmitHndlr(values)}>
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='text'
                  placeholder='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor='firstName'>First name</label>
                <input
                  id='firstName'
                  name='name.firstName'
                  type='text'
                  placeholder='First name'
                  value={values.name.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor='lastName'>Last name</label>
                <input
                  id='lastName'
                  name='name.lastName'
                  type='text'
                  placeholder='Last name'
                  value={values.name.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <DatePicker
                  name='dob'
                  selected={values.dob}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode='select'
                  onChange={(value) => setFieldValue('dob', value)}
                />
              </div>

              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
