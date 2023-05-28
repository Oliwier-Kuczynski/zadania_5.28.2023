let input = document.querySelector("[data-writing-field]");

function display(value) {
  input.parentElement.insertAdjacentHTML("beforebegin", `<p>${value}</p>`);
}

function wypiszDo10() {
  for (let i = 1; i <= 10; i++) {
    display(i);
    console.log(i);
  }
}

function sumaDo10() {
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += i;
  }

  display(sum);
  console.log(sum);
}

function wypiszParzysteDo20() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      display(i);
      console.log(i);
    }
  }
}

function iloczynDo5() {
  let iloczyn = 1;

  for (let i = 1; i <= 5; i++) {
    iloczyn *= i;
  }

  display(iloczyn);
  console.log(iloczyn);
}

function tabMnozeniaDla5() {
  for (let i = 1; i <= 10; i++) {
    display(5 * i);
    console.log(5 * i);
  }
}

function odwroconeSlowo(word) {
  let newWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  display(newWord);
  console.log(newWord);
}

function sumaDo5() {
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    sum += i;
  }

  display(sum);
  console.log(sum);
}

function trojkat() {
  for (let row = 1; row <= 5; row++) {
    let line = "";

    for (let spaces = 1; spaces <= 5 - row; spaces++) {
      line += " ";
    }

    for (let col = 1; col <= 2 * row - 1; col++) {
      line += "*";
    }

    display(line);
    console.log(line);
  }
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      display("FizzBuzz");
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      display("Fizz");
      console.log("Fizz");
    } else if (i % 5 === 0) {
      display("Buzz");
      console.log("Buzz");
    } else {
      display(i);
      console.log(i);
    }
  }
}

function palindrom(word) {
  const lcWord = word.toLowerCase();
  let wordCheck = "";

  for (let i = word.length - 1; i >= 0; i--) {
    wordCheck += lcWord[i];
  }

  if (lcWord === wordCheck) {
    display("Jest polindromem");
    console.log("Jest polindromem");
  } else {
    display("Nie jest polindromem");
    console.log("Nie jest polindromem");
  }
}

function calculateArea(width, height) {
  display(width * height);
  console.log(width * height);
  return width * height;
}

function wypelnijWyswietlTab() {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers[i] = i + 1;
  }

  for (let i = 0; i < 10; i++) {
    display(numbers[i]);
    console.log(numbers[i]);
  }
}

function capitalizeString(str) {
  display(str.charAt(0).toUpperCase() + str.slice(1));
  console.log(str.charAt(0).toUpperCase() + str.slice(1));
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function wyswietlFruits() {
  const fruits = ["jablko", "gruszka", "pomarancza", "melon"];

  for (const fruit of fruits) {
    display(fruit);
    console.log(fruit);
  }
}

function getMaxValue(tab) {
  let max = tab[0];

  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > max) max = tab[i];
  }

  display(max);
  console.log(max);

  return max;
}

let typedText = "";

function helpMsg() {
  input.parentElement.insertAdjacentHTML(
    "beforebegin",
    `<div class="box">
      <p>Enter: </p>
      <p>help to get help</p>
      <p>cls to clear the console</p>
      <p>1.1 For Wyświetl liczby od 1 do 10 w konsoli.</p>
      <p>1.1 For Wyświetl liczby od 1 do 10 w konsoli.</p>
      <p>1.2 Oblicz sumę liczb od 1 do 10 i wyświetl jej wartość w konsoli..</p>
      <p>1.3 For Wyświetl wszystkie parzyste liczby od 1 do 20 w konsoli.</p>
      <p>1.4 For Oblicz iloczyn liczb od 1 do 5 i wyświetl jego wartość w konsoli.</p>
      <p>1.5 For Wyświetl tabliczkę mnożenia dla liczby 5 (od 1 do 10) w konsoli.</p>
      <p>1.6 For Wyświetl odwrócony ciąg znaków dla podanego słowa w konsoli.</p>
      <p>1.7 For Wyświetl sumę cyfr 12345 w konsoli.</p>
      <p>1.8 For Wyświetl trójkąt z gwiazdek o wysokości 5 w konsoli.</p>
      <p>1.9 For FizBuzz</p>
      <p>1.10 For Sprawdź, czy podane słowo jest palindromem</p>
      <p>2.1 calculateArea</p>
      <p>2.2 Wypelnij tablice 1-10</p>
      <p>2.3 capitalizeString</p>
      <p>2.4 Wyswietl Fruits</p>
      <p>2.5 getMaxValue</p>
    </div>`
  );
}

function notRecognized(value) {
  input.parentElement.insertAdjacentHTML(
    "beforebegin",
    `<p>'${value}' is not recognized as an internal or external command,</p>
    <p>operable program or batch file.</p>`
  );
}

function cls() {
  document.querySelector(
    "main"
  ).innerHTML = `<p>PS C:\Users\Uczen><span data-writing-field=""></span><span class="write-symbol">|</span></p>`;

  input = document.querySelector("[data-writing-field]");
}

let additional = false;
let awaiting = null;

function decideAction(value) {
  const trimedVal = value.trim();

  switch (trimedVal) {
    case "help":
      helpMsg();
      break;
    case "cls":
      cls();
      break;
    case "1.1":
      wypiszDo10();
      break;
    case "1.2":
      sumaDo10();
      break;
    case "1.3":
      wypiszParzysteDo20();
      break;
    case "1.4":
      iloczynDo5();
      break;
    case "1.5":
      tabMnozeniaDla5();
      break;
    case "1.6":
      display("Podaj slowo: ");
      additional = true;
      awaiting = odwroconeSlowo;
      break;
    case "1.7":
      sumaDo5();
      break;
    case "1.8":
      trojkat();
      break;
    case "1.9":
      fizzBuzz();
      break;
    case "1.10":
      display("Podaj slowo: ");
      additional = true;
      awaiting = palindrom;
      break;
    case "2.1":
      display("Podaj szerokosc i wysokosc po ',': ");
      additional = true;
      awaiting = calculateArea;
      break;
    case "2.2":
      wypelnijWyswietlTab();
      break;
    case "2.3":
      display("Podaj string: ");
      additional = true;
      awaiting = capitalizeString;
      break;
    case "2.4":
      wyswietlFruits();
      break;
    case "2.5":
      display("Podaj elementy tablicy(liczby) po ',': ");
      additional = true;
      awaiting = getMaxValue;
      break;
    default:
      if (!additional) notRecognized(trimedVal);
      break;
  }
}

let lastCommends = JSON.parse(localStorage.getItem("commands"));
let currentIndex = lastCommends.length;

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    typedText = typedText.slice(0, -1);
    input.textContent = typedText;
    return;
  }

  if (e.key === "Enter") {
    display(`PS C:\\Users\\Uczen>${typedText}`);

    if (additional) {
      if (awaiting === calculateArea) {
        const [x, y] = typedText.replaceAll(" ", "").split(",").slice(0, 2);
        if (!x || !y) alert("Nie prawidlowe wartosci");
        awaiting(+x, +y);
      } else if (awaiting === getMaxValue) {
        // prettier-ignore
        const array = typedText.replaceAll(" ", "").split(",").map((x) => +x);

        if (array.some((x) => !x)) {
          alert("Nie prawidlowe wartosci");
        } else {
          awaiting(array);
        }
      } else {
        awaiting(typedText);
      }
      additional = false;
      awaiting = null;
    } else {
      if (typedText) decideAction(typedText);
    }

    lastCommends.push(typedText);
    localStorage.setItem("commands", JSON.stringify(lastCommends));

    typedText = "";
    input.textContent = "";
    window.scroll(0, document.body.scrollHeight);
    currentIndex = lastCommends.length;

    return;
  }

  lastCommends = JSON.parse(localStorage.getItem("commands"));

  if (e.key === "ArrowUp") {
    if (currentIndex === 0) return;
    currentIndex--;
    typedText = lastCommends[currentIndex];
    input.textContent = lastCommends[currentIndex];
    return;
  }

  if (e.key === "ArrowDown") {
    if (currentIndex === lastCommends.length - 1) return;
    currentIndex++;
    typedText = lastCommends[currentIndex];
    input.textContent = lastCommends[currentIndex];
    return;
  }

  if (e.key === "Shift") return;

  typedText += e.key;
  input.textContent = typedText;
});
