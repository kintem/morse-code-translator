const userInput = document.querySelector("#user-input");
const translation = document.querySelector("#translation");
const form = document.querySelector("form");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

const translate = (input) => {
  const inputArray = input.split("");

  let morseArray = inputArray.map(letter=>{
    let index = alphabet.indexOf(letter);
    return morseCode[index];
  })

  translation.innerHTML = `${input} in morse code is ${morseArray.join(" ")}`;
}

form.addEventListener("submit", (event) =>{
  event.preventDefault();
  translate(userInput.value);
});