// * Data
let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
  ];

//   * Bindings 
  const output = document.querySelector(".output");
  const button = document.getElementById("button");
  const explanation = document.querySelector(".explanation");
  const input = document.getElementById("input");
  
//   * Translator Funktion
  button.addEventListener('click', (e) =>{
      e.preventDefault();
    
      const inputMessage = input.value.toLowerCase();
      const messageArray = inputMessage.split("");
      
      messageArray.map((element) =>{
        const morseSign = morseAlphabet.find((sign) => sign.letter.toLowerCase() === element)
        
        output.innerHTML += morseSign.morseCode;
        if (morseSign.letter == " ") {
            output.innerHTML += " / ";
            explanation.innerHTML += "<br>"; 
        }else{
            explanation.innerHTML += `<br>${element} = ${morseSign.morseCode}<br>`;
        }
      })
})

// * Reset Function
document.getElementById("reset").addEventListener('click', () =>{
    console.clear();
    input.value = ""
    explanation.innerHTML = ""
    output.innerHTML = ""
})