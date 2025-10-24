const passwordValidation = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return passwordRegex.test(password);
};

export default passwordValidation;
