import { useState } from 'react';
import './PasswordGenerator.css';



function PasswordGenerator() {
  var letters, nr_letters, nr_numbers, nr_symbols, numbers, password, symbols;

  const [letter, setLetter] = useState("");
  const [symbol, setSymbol] = useState("");
  const [number, setNumber] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("Your generated password:");
  const [copy, setCopy] = useState('copy');


  function generate(e) {
    e.preventDefault()
    const [nr_letter, nr_symbol, nr_number] = [letter, symbol, number]
    if (!isNaN(nr_letter)) {
    } else {
      alert("Enter a valid number!")
      setLetter("")
      return;
    };

    if (!isNaN(nr_symbol)) {
    } else {
      alert("Enter a valid number!")
      setSymbol("")
      return;
    };

    if (!isNaN(nr_number)) {
    } else {
      alert("Enter a valid number!")
      setNumber("")
      return;
    }



    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
    numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



    nr_letters = Number.parseInt(nr_letter);
    nr_symbols = Number.parseInt(nr_symbol);
    nr_numbers = Number.parseInt(nr_number);

    let passwordList = []

    while (nr_letters > 0) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      passwordList.push(letters[randomIndex]);
      // console.log(passwordList);
      nr_letters--;
    }

    while (nr_symbols > 0) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      passwordList.push(symbols[randomIndex]);
      // console.log(passwordList);
      nr_symbols--;
    }

    while (nr_numbers > 0) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      passwordList.push(numbers[randomIndex]);
      // console.log(passwordList);
      nr_numbers--;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }


    shuffleArray(passwordList);
    password = "";

    passwordList.forEach(item => {
      password += item
    })


    setGeneratedPassword(password);
    setLetter("")
    setSymbol("")
    setNumber("")
  }



  return (
    <>

      <div className="App">
        <form className='form' onSubmit={generate}>
          <span>Kindly enter integer numbers only!</span>
          <input placeholder='How many letters you would like?' className='input' type="text" name="nr_letters" value={letter} onChange={e => { setLetter(e.target.value) }} required autoFocus />
          <input placeholder='How many symbols?' className='input' type="text" name="nr_symbols" value={symbol} onChange={e => { setSymbol(e.target.value) }} required />
          <input placeholder='How many Numbers?' className='input' type="text" name="nr_numbers" value={number} onChange={e => { setNumber(e.target.value) }} required />

          <button className='btn' type="submit">Generate</button>
        </form>
        <div className="pass">
          <div className="genpass">
            {generatedPassword}
          </div>
          <div className="copy">
            <button className='btn-extra' onClick={() => {navigator.clipboard.writeText(generatedPassword).then(() => {
              if (generatedPassword === 'Your generated password:') {
                alert('Bro generate your password and then copy it!')
              } else {
                setCopy("copied");
                setTimeout(() => {
                  setCopy("copy")
                }, 5000);
              }
            })}}>{copy}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
