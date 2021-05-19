interface Name {
  first: string;
  last: string;
}

interface Login {
  email: string;
  password: string;
}

interface SignUp extends Login {
  name: Name;
  dob: string;
}
