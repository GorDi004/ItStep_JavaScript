//1
let age = parseInt(prompt("Enter your age", ' '));
(age > 0 && age < 3) ? document.write("Child") 
: (age > 11 && age < 19) ? document.write("Teenager") 
: (age > 18 && age < 60) ? document.write("Adult") 
: (age > 59) ? document.write("Pensioner") 
: document.write("Error");

