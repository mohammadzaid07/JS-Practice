const accountId = 123
let accountEmail = "zaid@google.com"
var accountPassword = "1234"
accountCity = "Agra"

//accountId = 234 not allowed

accountEmail = "mz@mz.com"
accountPassword = "234323"
accountCity = "Noida"
let accountState;

/*
Dont use var use let
because var have issue in block scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])