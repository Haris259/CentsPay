export const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};
export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};
export const isValidEmail = value => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(value);
};
