const checkEmail = email => {
  const matcher = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return email.length > 0 && email.test(matcher);
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
      if (status) errors.push({ email: 'Invalid email' });
    } else if (key === 'password') {
      const status = checkPassword(passwordRequirements);
      if (status) errors.push({ password: 'Invalid password' });
      // if (status.)
    }
  });
}
