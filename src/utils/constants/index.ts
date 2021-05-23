// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Minimum eight characters, at least one letter and one number:
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const nameRegex = /^[A-Za-z ]*$/;
export const dateRegex = /^[0-9]{2}$/;
export const yearRegex = /^(19[0-9]\d|20[0-4]\d|2050)$/; // 1900 - 2050

export const passWordErrorMsg = {
  minimum: 'Password must be at least 8 characters',
  contain: 'Password must contain at least one number, one letter',
};

export const nameErrorMsg = 'Please enter a valid name';

export const SIGN_UP_DATA: {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  customFormat: boolean;
}[] = [
  {
    type: 'email',
    id: 'email',
    name: 'email',
    label: 'email',
    placeholder: 'email',
    customFormat: false,
  },
  {
    type: 'password',
    id: 'password',
    name: 'password',
    label: 'password',
    placeholder: '********',
    customFormat: false,
  },
  {
    type: 'text',
    id: 'firstName',
    name: 'name.firstName',
    label: 'first name',
    placeholder: 'John',
    customFormat: false,
  },
  {
    type: 'text',
    id: 'lastName',
    name: 'name.lastName',
    label: 'last name',
    placeholder: 'Doe',
    customFormat: false,
  },
  {
    type: 'text',
    id: 'dob',
    name: 'dob',
    label: 'date of birth',
    placeholder: 'MM/DD/YYYY',
    customFormat: true,
  },
  {
    type: 'text',
    id: 'phoneNum',
    name: 'phoneNum',
    label: 'Phone',
    placeholder: '000-000-0000',
    customFormat: true,
  },
];

export const SIGN_UP_SELECT: { label: string; value: string }[] = [
  {
    label: 'male',
    value: 'm',
  },
  {
    label: 'female',
    value: 'f',
  },
];
