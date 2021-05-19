// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Minimum eight characters, at least one letter and one number:
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const passWordErrorMsg = {
  minimum: 'Password must be at least 8 characters',
  contain: 'Password must contain at least one number, one letter',
};
