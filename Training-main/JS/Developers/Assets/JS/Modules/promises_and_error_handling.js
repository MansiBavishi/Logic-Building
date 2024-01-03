class promises
{
	loadImage(url)
	{
		return new Promise( (resolve, reject) => {
				const img = new Image();
				img.addEventListener('load', () => resolve(img));
				img.addEventListener('error', () => reject(new Error(`Failed to load ${url}`)) );
			img.src = url;
			img.className = "grid-item";
		});
	}
	   
}
class ErrorHandling
{
	throws()
	{
		return "Something is not working here...!";
	}
}

export { promises, ErrorHandling };