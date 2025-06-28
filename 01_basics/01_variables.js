const accountID = 144553
let accountEmail = "soni.kapsh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountID = 2  this is not allowed 
accountEmail = "sonikapil4132@gmail.com"
accountPassword = "54321"
accountCity = "Bengluru"

console.log(accountID);

/*
Prefer not to use var 
because of issue in block scope and functional scope


*/
console.table([accountID , accountEmail , accountPassword, accountCity, accountState])
