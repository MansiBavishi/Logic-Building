// // import { console } from "./modules/display/index.js";

// // import { Animal } from "./modules/OOPS/inheritance.js";

// // // custom file to display table
// // import data from '../data/test.json' assert { type: 'json' };
// // console.table(data);


// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // for(let i in array)
// // {
// //     console.log_success(i);
// // }

// // for(let i of array)
// // {
// //     console.log_success(i);
// // }

// // let i = 0;
// // while(i < array.length)
// // {
// //     console.warn(array[i]);
// //     i = i + 1;
// // }

// // do{
// //     console.error(array[i]);
// //     i = i + 1;
// // }while(i <= array.length);

// // console.log_success(Symbol("foo1") === Symbol("foo1"));


// // var x = 10;

// // const fooBar = () => {
// //     return () => {
// //         var y = 20;
// //         function bar () {
// //             var z = 15;
// //             return x + y + z;
// //         }
// //         return bar;
// //     }
// // }


// // console.log_success(fooBar()()());




// // const arr1 = [1,2,3,4,5,6];

// // console.log_success(arr1);


// // try
// // {
// // 	fetch('https://jsonplaceholder.typicode.com/todos/1')
// // 		.then(response => response.json())
// // 		.then(json => console.log_success(json.userId))
// // 		.catch(error => console.alerts("No Data or wrong API...!"));
// // }
// // catch(error)
// // {
// // 	console.error("Something went Wrong...!");
// // }


// // let promise = new Promise((resolve, reject) => {
// //     // setTimeout(() => resolve("done!"), 1000);
// //     setTimeout(() => reject("Catch : done!"), 1000);
// // });
	
// //   // resolve runs the first function in .then
// //   promise
// //   .then(result => alert(result))
// //   .catch(error => alert("Catch : " + error));


// // document.getElementById("set_variable").addEventListener("click", () => {
// // 	const varName = document.getElementById("variable_name").value;
// // 	const varValue = document.getElementById("variable_value").value;

// // 	window[varName] = parseInt(varValue);

// // 	console.log(varName, window[`${varName}`]);
// // 	console.log(varName, typeof window[`${varName}`]);
// // });

// // const animal = new Animal();

// // animal.speak();
// // animal.bark();
// // animal.name;


// // String(varName);
// console.time("Function")
// console.log(Math.max(1,2,3,4,5,6,7,8,9, 11, 12));
// console.timeEnd("Function");

// console.time("Ternary");
// console.log(1 > 2 ? 2 > 3 ? 3 > 4 ? 4 > 5 ? 5 > 6 ? 6 > 7 ? 7 > 8 ? 8 > 9 ? 9 > 11 ? 11 > 12 ? 12 : 11 : 9 : 8 : 7 : 6 : 5 : 4 : 3 : 2 : 1);
// console.timeEnd("Ternary");


// console.time("Loop")
// let a = [1,2,3,4,5,6,7,8,9, 11, 12]
// let max = a[0]
// for(let i of a){
//     if(i>max){
//         max = i
//     }
// }
// console.log(max);
// console.timeEnd("Loop");
const repl = require('repl')._builtinLibs
const path = require('path');
const os = require('os');
      historyPath = path.join(os.homedir(), '.node_repl_history');
    const historyData = repl.history.join(os.EOL);
        'a valid, user-writable path to enable.\n'
        err.path = self.spawnfile;
  this.path = null;
// Special case for a simple path URL
// are the ones that are *expected* to be seen, so we fast-path them.
    // Try fast path regexp
      this.path = rest;
  // resolution will treat //foo/bar as host=foo,path=bar because that's
    // http://a@b?@c => user:a host:b path:/?@c
      // http://a@b/c@d => host:b auth:a path:/c@d
    this.path = p + s;