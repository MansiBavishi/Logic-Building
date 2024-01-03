// Collections
class collections
{
	indexed_collection()
	{
		console.group("Array Objects");
		let myArray = ["one", 1, "two", 2];
		console.log(myArray);

		console.group("level 2");

		myArray.length = 5;
		console.log(myArray);

		console.group("level 3");
		myArray.length = 1;
		console.log(myArray);

		console.group("level 4");
		console.log("Don't make it more complex...!")
		console.groupEnd("level 4");

		console.groupEnd("level 3");

		console.groupEnd("level 2");

		console.groupEnd("Array Objects");	
	
	}

	keyed_collections()
	{
		// Map and Set
	}

	dom_collections()
	{
		// All HTML Elements
	}
}

export { collections };