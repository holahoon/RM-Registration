import { Formik, Field, Form, useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import FormInput from 'components/forms/FormInput';
import FormSelect from 'components/forms/FormSelect';

//https://reactdatepicker.com/#example-year-dropdown

import {
  passwordRegex,
  nameRegex,
  dateRegex,
  yearRegex,
  passWordErrorMsg,
  nameErrorMsg,
  SIGN_UP_DATA,
  SIGN_UP_SELECT,
} from 'utils/constants';

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
    // dob: new Date(),
    dob: '',
    phoneNum: '',
    gender: '',
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
          const { values, isSubmitting, handleSubmit, handleReset, setFieldValue } = props;
          return (
            <Form onSubmit={handleSubmit}>
              {SIGN_UP_DATA.map((data, idx) => (
                <FormInput key={`${data.id}-${idx}`} {...data} setFieldValue={setFieldValue} />
              ))}

              <FormSelect
                optionsList={SIGN_UP_SELECT}
                id='gender'
                name='gender'
                label='Select gender'
              />

              {/* <div>
                <DatePicker
                  name='dob'
                  selected={values.dob}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode='select'
                  onChange={(value) => setFieldValue('dob', value)}
                />
              </div> */}

              <div>
                <button type='submit'>Submit</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
