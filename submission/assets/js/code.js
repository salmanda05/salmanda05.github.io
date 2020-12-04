const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
 
const user = {
       first: firstName,
       last: lastName,
   };
 
alert("Welcome, " + user.first + " " + user.last + "!");