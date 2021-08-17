export const checkNumber = (item) => {
  const check_num = /[0-9]/;

  return check_num.test(item);
};
