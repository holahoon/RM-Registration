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

export const INPUT_DATA: {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
}[] = [
  { type: 'email', id: 'email', name: 'email', label: 'email', placeholder: 'email' },
  {
    type: 'password',
    id: 'password',
    name: 'password',
    label: 'password',
    placeholder: '********',
  },
  {
    type: 'text',
    id: 'firstName',
    name: 'name.firstName',
    label: 'first name',
    placeholder: 'John',
  },
  {
    type: 'text',
    id: 'lastName',
    name: 'name.lastName',
    label: 'last name',
    placeholder: 'Doe',
  },
];
