const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateOtp = () => getRandomInt(100000, 999999);
const generateId =()=>
  Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);


export { generateOtp , generateId};
