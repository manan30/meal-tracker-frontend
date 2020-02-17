const checkEmail = email => {
  const matcher = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return email.length > 0 && email.test(matcher);
};

const checkPassword = (password = '') => {
  if (password.length < 8) return { error: 'length' };
};

export default function(inputs = {}) {
  const errors = [];
  Object.entries(inputs).forEach(entry => {
    const [key, value] = entry;
    if (key === 'email') {
      const status = checkEmail(value);
      if (status) errors.push({ email: 'Invalid email' });
    } else if (key === 'password') {
      const status = checkPassword(value);
      // if (status.)
    }
  });
}
