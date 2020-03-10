const checkEmail = email => {
  const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return email.length > 0 && exp.test(email);
};

const checkPassword = (requirements = []) => {
  return requirements.reduce((acc, curr) => acc && curr[1], true);
};

export default function(inputs = {}, passwordRequirements = []) {
  const errors = [];

  Object.entries(inputs).forEach(entry => {
    const [key, value] = entry;

    if (key === 'email') {
      const status = checkEmail(value);
      if (!status) errors.push({ email: 'Invalid email' });
    }

    if (key === 'password') {
      const status = checkPassword(passwordRequirements);
      if (!status) errors.push({ password: 'Invalid password' });
    }

    if (!value || value.length === 0 || value === null)
      errors.push({ [key]: 'Required field' });
  });

  return errors;
}
