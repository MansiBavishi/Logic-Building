class login
{
	constructor()
	{
		this.username = document.getElementById("username").value; // admin
		this.password = document.getElementById("password").value; // admin
	}

	check_user()
	{
			let loginObj = new login();
			return (loginObj.username  == "admin" && loginObj.password  == "admin") ? true : false;
	}
};

export { login };