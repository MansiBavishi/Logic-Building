(() => {
  arr1 = [1, 2, 3, 4, 5];
  fe = arr1.shift();
  fun2(fe, ...arr1);
})();

function fun2(fe, ...arr1) {
  arr2 = [6, 7, 8, 9];
  arr2.unshift(fe);
  arr2.push(...arr1);
  const sum = arr2.reduce((sum, i) => sum + i);

  const myPromise = new Promise((resolve, reject) => {
    sum > 30 ? resolve(sum) : reject("err");
  });

  myPromise
    .then((val) => {
      fetch(`https://picsum.photos/v2/list?limit=${val}`)
        .then((response) => response.json())
        .then((items) => {
          items.map((item) => {
            console.log(item.download_url);
          });
        });
    })
    .catch((err) => alert(err));
}
