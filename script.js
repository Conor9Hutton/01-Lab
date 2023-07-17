const fullName = "Conor Hutton";
console.log(fullName);
let age = 29;
console.log(age);
const birthday = "November 17";
console.log(birthday);
const pineapplePizza = true;
console.log(pineapplePizza);

if (pineapplePizza === true) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

lifeEvents = [
  "I was born in Ann Arbor, Michigan",
  "I went to Grand Valley State University",
  "I played soccer when I was younger",
  "I have a dog named Pickles",
];

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

const wage = 10;
const hours = 50;
if (hours <= 40) {
  const pay = wage * hours;
  const weeksUntilMillion = 1000000 / pay;
  console.log(
    `It will take you ${weeksUntilMillion} weeks until you make one million dollars.`
  );
  console.log(pay);
} else {
  const extraHours = hours - 40;
  const overTime = extraHours * (wage * 1.5);
  const pay = 40 * wage + overTime;
  const weeksUntilMillion = 1000000 / pay;
  console.log(
    `It will take you ${weeksUntilMillion} weeks until you make one million dollars.`
  );
  console.log(pay);
}
