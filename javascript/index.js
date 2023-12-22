(() => {
  const mySymbol = Symbol("myArray");
  const objWithSymbol = {
    [mySymbol]: [1, 2, 3, 4, 5],
  };
  const arr1 = objWithSymbol[mySymbol];
  console.log(arr1);

  fe = arr1.shift();
  fun2(fe, ...arr1);
})();

function fun2(fe, ...arr1) {
  const mySymbol = Symbol("myArray");
  const objWithSymbol = {
    [mySymbol]: [6, 7, 8, 9],
  };
  const arr2 = objWithSymbol[mySymbol];
  console.log(arr2);
  arr2.unshift(fe);
  arr2.push(...arr1);
  console.log(arr2);
  const sum = arr2.reduce((sum, i) => sum + i);

  const myPromise = new Promise((resolve, reject) => {
    sum > 30 ? resolve(sum) : reject("err");
  });

  myPromise
    .then((sum) => {
      fetch(`https://picsum.photos/v2/list?limit=${sum}`)
        .then((response) => response.json())
        .then((items) => {
          items.map((item) => {
            console.log(item.download_url);
          });
        });
    })
    .catch((err) => alert(err));
}
