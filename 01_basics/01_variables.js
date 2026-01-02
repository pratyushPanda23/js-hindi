const accountId = 144553
let accountEmail = "pratyush@google.com"
var accountPassword = "12345"
accountCity="Barpali"
let accountState;

// accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bargarh"//it is also a way of declaring variable
console.log(accountId);
/*
PREFER NOT TO USE VAR!!
Because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
