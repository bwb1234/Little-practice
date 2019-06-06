const utils = function(api) {
  return new Promise((resolve, reject) => {
    fetch(api)
      .then(res => {
        return res.json();
      })
      .then(res => {
        resolve(res);
      });
  });
};
export default utils;
