interface Name {
  first: string;
  last: string;
}

interface DOB {
  month: string;
  day: string;
  year: string;
}

interface Login {
  email: string;
  password: string;
}

interface SignUp extends Login {
  name: Name;
  dob: DOB;
}
