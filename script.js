//1) მომხმარებელს შეყავს სამკუთხედის გვერდები,
// თქვენ უნდა დაადგინოთ იარსებებს თუ არა ასეთი სამკუთხედი
// (სამკუთხედი შეიძლება არსებობდეს თუ მისი ნებისმიერი ორი გვერდის სიგრძეების ჯამი მეტია მესამეზე)

let a = +prompt("შეიყვანეთ სამკუთხედის პირველი გვერდის სიგრძე");
let b = +prompt("შეიყვანეთ სამკუთხედის მეორე გვერდის სიგრძე");
let c = +prompt("შეიყვანეთ სამკუთხედის მესამე გვერდის სიგრძე");

if (a + b > c && a + c > b && b + c > a) {
  console.log("ყოჩაღ, ასეთი სახის სამკუთედის მიღება შესაძლებელია");
} else {
  console.log("არაუშავს, თავიდან სცადე");
}

//2) მომხმარებელს შეყავს სამი რიცხვი. თქვენ უნდა დაადგინოთ არის თუ არა პირველი რივცხვი
// მოთავსებული მეორეს და მესამეს შორის

if (a > b && a < c) {
  console.log(
    "პირველი ციფრი/რიცხვი ნამდვილად მეორესა და მესამეს შუაშია მოქცეული"
  );
} else if (a > b && a > c) {
  console.log(
    "სამწუხაროდ პირველი ციფრი/რიცხვი ყველაზე დიდია და არაა შუაში მოქცეული"
  );
} else {
  console.log(
    "სამწუხაროდ პირველი ციფრი/რიცხვი ყველაზე პატარაა და არაა შუაში მოქცეული"
  );
}

// 3)მომხმარებელს შეყავს წელი. თქვენ უნდა დაადგინოთ არის თუ არა ეს წელი ნაკიანი.
// (წელი ნაკიანია თუ ის უნაშთოდ იყოფა 4ზე და არ იყოფა უნაშთოდ 100ზე, ან უნაშთოდ იყოფა 400ზე)

let year = +prompt("შეიყვანეთ სასურველი წელი");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " წელი - ნაკიანი წელიწადი არის");
} else {
  console.log(year + " წელი - არა არის ნაკიანი წელიწადი ");
}
