/*let title ="Amin";
let doc ="blue";
let dat ="20.2";
let markUp =`
<div class="card">
<div class="child">
<h2>${title}</h2>
<p>${doc}</p>
<span>${dat}</span>
</div>
</div>`;
console.log(10 + 20);
console.log(20 + ' ' +'amin');
console.log(Number("300"))
let a ="20";
let c =10;
let b = true;
console.log(+a + c + b);
document.write(markUp
let a = 30;
a = a + 20;
a = a + 30;
a += 100;
a -= 100
console.log(a)
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(); //2000
console.log(-d * +e); 
console.log(); //173
console.log(-d + ++f + ++e * ++g); 

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

console.log((100).toString());
console.log((100.50.toString()));

console.log((100.55555.toFixed(1)))

console.log(Number.MAX_SAFE_INTEGER); //max Number
console.log(Number.MAX_VALUE); //min Number
console.log(Number("100 amin"));
console.log(+"100 amin");
console.log(parseInt("100 amin"));
console.log(parseInt("100.500 amin"));
console.log(parseFloat("100.500 amin"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Math.round(99.2));
console.log(Math.round(99.6));

console.log(Math.ceil(99.2)); //mix
console.log(Math.floor(99.6)); //min

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4)); //  2*2*2*2
console.log(Math.random()); 
console.log(Math.trunc(99.5)); // deled .5 

// if conditions 
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === false ){
    price -= discountAmount // price = price - discountAmount
}else if (country === "Egypt"){
    price -= 40;
}else if (country === "syria"){
    price -= 50;
}else {
    price -= 10; // price = price - 10  اول شرط خالص 
}
console.log(price) 

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male"){
    console.log("Mr");
}else {
    console.log("Mrs");
}
// condition ? if true : if false
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20 s
? console.log(20) 
: theAge > 20 && theAge < 60 
? console.log("20 To 60") 
: theAge  > 60 
? console.log("Larger Than 60") 
: console.log(Unknown);
*/
  // Arrays 
/*let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[2][0]}`);
console.log(`Hello ${myFriends[3][0]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
myFriends.length = 3;
console.log(myFriends);

//Arrays methods [Adding and Removing]
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends);
myFriends.unshift("Osama", "Nabil"); //adding first
console.log(myFriends);
myFriends.push("Samah", "Eman"); //adding last
console.log(myFriends);

let first = myFriends.shift(); //Remove first
console.log(myFriends);
console.log(`First Name Is ${first}`); //تطلع الاول بس

let last = myFriends.pop(); //Remove last
console.log(myFriends);
console.log(`Last Name Is ${last}`); //تطلع الاخير بس 

//Arrays methods [Search]
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends);

console.log(myFriends.indexOf("Sayed")); //search array first
console.log(myFriends.indexOf("Sayed", 2));

console.log(myFriends.lastIndexOf("Sayed")); //search array last
console.log(myFriends.lastIndexOf("Sayed", -2));

console.log(myFriends.includes("Sayed")); // يحتوي علي العنصر ده ولا لا
console.log(myFriends.includes("Sayed" , 2)); 

//Arrays methods sort , reverse
let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFriends);
console.log(myFriends.sort()); //ترتيب العنصر من الاول الي الاخير 
console.log(myFriends.reverse()); //ترتيب العنصر من الاخير الي الاول 

//Arrays methods slice , splice //الي بتكتبه مش بياخده
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice(1)); 
console.log(myFriends.slice(1, 4));
console.log(myFriends);
myFriends.splice(1,2, "Sameer" , "Samara"); // بدل 
console.log(myFriends); 

Arrays Methods Joining , concat تستخدم في النص 

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allFriends);
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

//Array challenge
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my);

let last = my.pop();
console.log(my.reverse());
console.log(my.slice("2"));*/
















//time
let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


