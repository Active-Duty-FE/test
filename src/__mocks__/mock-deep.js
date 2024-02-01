export function fetchData() {
  return new Promise((resolve, reject) => {
    resolve('(function(){ return "abc" })()');
  });
}
