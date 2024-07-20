const accountId = 123456
let accountEmail = "karkidharmendra21@gmail.com"
var accountPassword = "12345"
accountCity = "Mnr"
let accountState;

// accountId = 2 // not allowed


accountEmail = "karkidharmendra21@gmail.com"
accountPassword = "123456789"
accountCity = "Darchula"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])