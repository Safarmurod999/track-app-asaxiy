const setLocalStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  const data = localStorage.getItem(`${key}`);
  return data ? JSON.parse(data) : null;
};

export { setLocalStorage, getLocalStorage };
