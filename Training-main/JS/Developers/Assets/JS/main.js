// Imports
import { consoles } from './Modules/display/index.js';
import { login } from '../JS/Modules/login_module.js';
import { collections } from '../JS/Modules/collections.js';

import { extensions } from './Modules/object_and_string.js';

import { promises, ErrorHandling } from './Modules/promises_and_error_handling.js';
import { Shapes } from './Modules/mantavya.js';

// // custom file to display table
// import data from '../data/test.json' assert { type: 'json' };
// consoles.table(data);

// ES6 Classes & Modules
document.getElementById("login").addEventListener( "click", () => {
	const loginObj = new login;
	loginObj.check_user() === true ? consoles.log_success("Welcome Admin...!") : consoles.error("This is not Working...!");
});

// Arrays extensions &  ES6 Collections
document.getElementById("arrays").addEventListener( "click", () => {
	const collectionObj = new collections();
	collectionObj.indexed_collection();
});


// Objects extensions & Strings extensions
document.getElementById("_objects").addEventListener( "click", () => {
	const extensionsObj = new extensions();
	consoles.group("Object & strings");
	consoles.log_success(extensionsObj.objectClass.objectExtension());
	consoles.log_success(extensionsObj._objectClass.objectExtensions());
	consoles.log_success(extensionsObj.stringClass.stringExtensions());
	// consoles.log_success(extensionsObj.objectClass);
	consoles.groupEnd("Object & strings");
});

// Promises & Error handling
				// Syntax error
				// Runtime error
				// Logical Error
				// Try...catch...finally,
				// Throw
document.getElementById("img_promise").addEventListener("click", async () =>
{
	const randomImage = ["https://picsum.photos/id/102/4320/3240", "https://picsum.photos/id/103/2592/1936", "https://picsum.photos/id/104/3840/2160", "https://picsum.photos/id/106/2592/1728", "https://picsum.photos/id/107/5000/3333", "https://picsum.photos/id/108/2000/1333", "https://picsum.photos/id/109/4287/2392", "https://picsum.photos/id/110/5000/3333", "https://picsum.photos/id/111/4400/2656", "https://picsum.photos/id/112/4200/2800", "https://picsum.photos/id/113/4168/2464", "https://picsum.photos/id/114/3264/2448", "https://picsum.photos/id/115/1500/1000", "https://picsum.photos/id/116/3504/2336", "https://picsum.photos/id/117/1544/1024", "https://picsum.photos/id/118/1500/1000", "https://picsum.photos/id/119/3264/2176", "https://picsum.photos/id/120/4928/3264", "https://picsum.photos/id/121/1600/1067", "https://picsum.photos/id/122/4147/2756", "https://picsum.photos/id/123/4928/3264", "https://picsum.photos/id/124/3504/2336", "https://picsum.photos/id/125/1500/1000", "https://picsum.photos/id/126/4272/2511", "https://picsum.photos/id/127/4032/2272", "https://picsum.photos/id/128/3823/2549", "https://picsum.photos/id/129/4910/3252", "https://picsum.photos/id/130/3807/2538", "https://picsum.photos/id/131/4698/3166", "https://picsum.photos/id/132/1600/1066", "https://picsum.photos/id/133/2742/1828", "https://picsum.photos/id/134/4928/3264", "https://picsum.photos/id/135/2560/1920", "https://picsum.photos/id/136/4032/2272", "https://picsum.photos/id/137/4752/3168", "https://picsum.photos/id/139/3465/3008", "https://picsum.photos/id/140/2448/2448", "https://picsum.photos/id/141/2048/1365", "https://picsum.photos/id/142/4272/2848", "https://picsum.photos/id/143/3600/2385", "https://picsum.photos/id/144/4912/2760", "https://picsum.photos/id/145/4288/2848", "https://picsum.photos/id/146/5000/3333", "https://picsum.photos/id/147/2448/2448", "https://picsum.photos/id/149/3454/2288", "https://picsum.photos/id/151/4288/3216", "https://picsum.photos/id/152/3888/2592", "https://picsum.photos/id/153/4763/3155", "https://picsum.photos/id/154/3264/2176", "https://picsum.photos/id/155/3264/2176", "https://picsum.photos/id/156/2177/3264", "https://picsum.photos/id/157/5000/3914", "https://picsum.photos/id/158/4836/3224", "https://picsum.photos/id/159/5000/2460", "https://picsum.photos/id/160/3200/2119", "https://picsum.photos/id/161/4240/2832", "https://picsum.photos/id/162/1500/998", "https://picsum.photos/id/163/2000/1333", "https://picsum.photos/id/164/1200/800", "https://picsum.photos/id/165/2000/1333", "https://picsum.photos/id/166/1280/720", "https://picsum.photos/id/167/2896/1944", "https://picsum.photos/id/168/1920/1280", "https://picsum.photos/id/169/2500/1662", "https://picsum.photos/id/170/2500/1667", "https://picsum.photos/id/171/2048/1536", "https://picsum.photos/id/172/2000/1325", "https://picsum.photos/id/173/1200/737", "https://picsum.photos/id/174/1600/589", "https://picsum.photos/id/175/2896/1944", "https://picsum.photos/id/176/2500/1662", "https://picsum.photos/id/177/2515/1830", "https://picsum.photos/id/178/2592/1936", "https://picsum.photos/id/179/2048/1365", "https://picsum.photos/id/180/2400/1600", "https://picsum.photos/id/181/1920/1189", "https://picsum.photos/id/182/2896/1944", "https://picsum.photos/id/183/2316/1544", "https://picsum.photos/id/184/4288/2848", "https://picsum.photos/id/185/3995/2662", "https://picsum.photos/id/186/2048/1275", "https://picsum.photos/id/187/4000/2667", "https://picsum.photos/id/188/2896/1936", "https://picsum.photos/id/189/2048/1536", "https://picsum.photos/id/190/2048/1365", "https://picsum.photos/id/191/2560/1707", "https://picsum.photos/id/192/2352/2352", "https://picsum.photos/id/193/3578/2451", "https://picsum.photos/id/194/2000/1325", "https://picsum.photos/id/195/768/1024", "https://picsum.photos/id/196/2048/1536", "https://picsum.photos/id/197/4272/2848", "https://picsum.photos/id/198/3456/2304", "https://picsum.photos/id/199/2592/1728", "https://picsum.photos/id/200/1920/1280", "https://picsum.photos/id/201/5000/3333", "https://picsum.photos/id/202/2392/1260", "https://picsum.photos/id/203/4032/3024", "https://picsum.photos/id/204/5000/3333", "https://picsum.photos/id/206/2880/1800"]

	const promiseObj = new promises();

	consoles.group('image Errors')
	// load /image.png and append to #image-holder, otherwise throw error
	try
	{
		let img = await promiseObj.loadImage(randomImage[Math.floor(Math.random() * (500 - 0 + 1)) + 0]);
		document.getElementById('promise_img').appendChild(img);
	}
	catch (error)
	{
		consoles.error(error);
		throw new Error(error);
	}
	finally
	{
		consoles.log_success("Finally always runs...!");
	}
	consoles.groupEnd('image Errors')
});

document.getElementById("error_throw").addEventListener("click", async () =>
{
	const errorHandlingObj = new ErrorHandling();
	console.log(errorHandlingObj.throws(), " something is not right...!", 50, { "type": 'something' })
	throw  { "type": 'something' };
});

// Mantavya Purohit's Assignemnt
document.getElementById("assignment_man").addEventListener("click", async () =>
{
	const shapesObj = new Shapes(5, 6);
	shapesObj.rectangle.printRectangle();
});


// Symbols
