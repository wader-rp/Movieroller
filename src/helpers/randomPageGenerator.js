export const randomNumber = (num, max) => {
  let _num = num;

  if (max && _num > max) _num = max;

  return Math.floor(Math.random() * _num);
};
