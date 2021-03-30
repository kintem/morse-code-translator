const userInput = document.querySelector("#user-input");
const translation = document.querySelector("#translation");
const form = document.querySelector("form");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const morseLetters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

const morseNumbers = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----." ];

const translate = (input) => {
  const inputArray = input.split("");

  const morseArray = inputArray.map(input=>{
    if ((/[0-9]/).test(input)) {
      return morseNumbers[+input]
    } else if ((/[a-zA-Z]/).test(input)) {
      let index = alphabet.indexOf(input.toLowerCase());
      return morseLetters[index]
    }
  })

  translation.innerHTML = `${input} in morse code is ${morseArray.join(" ")}`;
}

form.addEventListener("submit", (event) =>{
  event.preventDefault();
  translate(userInput.value);
});