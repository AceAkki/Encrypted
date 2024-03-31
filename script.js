  function toggleRandomKey() {
        const randomKeyContainer = document.getElementById("randomKeyContainer");
        const keyInput = document.getElementById("key");

        if (document.getElementById("randomKey").checked) {
            randomKeyContainer.style.display = "block";
            keyInput.disabled = true;
        } else {
            randomKeyContainer.style.display = "none";
            keyInput.disabled = false;
        }
    }

    function generateRandomKey() {
   
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    
        for (let i = alphabet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
        }
    
    
        const randomKey = alphabet.join("");
    
        const randomKeyValue = document.getElementById("randomKeyValue");
        randomKeyValue.textContent = `Random Key: ${randomKey}`;
        randomKeyValue.style.display = "block";
    
       
        document.getElementById("key").value = randomKey;
    }
    

    function copyRandomKey() {
        const randomKey = document.getElementById("randomKeyValue").textContent.split(": ")[1];
        const dummyTextarea = document.createElement("textarea");
        document.body.appendChild(dummyTextarea);
        dummyTextarea.value = randomKey;
        dummyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(dummyTextarea);
        alert("Random Key Copied!");
    }

        function encrypt() {
            const inputText = document.getElementById("inputText").value;
            const key = document.getElementById("key").value;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
            const encryptedAlphabet = key.toLowerCase() + alphabet;

            let encryptedText = "";

            for (let i = 0; i < inputText.length; i++) {
                const char = inputText.charAt(i).toLowerCase();
                const index = alphabet.indexOf(char);

                if (index !== -1) {
                    const encryptedChar = encryptedAlphabet.charAt(index);
                    encryptedText += inputText.charAt(i) === inputText.charAt(i).toLowerCase() ? encryptedChar : encryptedChar.toUpperCase();
                } else {
                    encryptedText += inputText.charAt(i);
                }
            }

            document.getElementById("result").textContent = "Encrypted Text: " + encryptedText;
        }
   function decrypt() {
            const inputText = document.getElementById("inputText").value;
            const key = document.getElementById("key").value;

            const alphabet = "abcdefghijklmnopqrstuvwxyz";
            const encryptedAlphabet = key.toLowerCase() + alphabet;

            let decryptedText = "";

            for (let i = 0; i < inputText.length; i++) {
                const char = inputText.charAt(i).toLowerCase();
                const index = encryptedAlphabet.indexOf(char);

                if (index !== -1) {
                    const decryptedChar = alphabet.charAt(index);
                    decryptedText += inputText.charAt(i) === inputText.charAt(i).toLowerCase() ? decryptedChar : decryptedChar.toUpperCase();
                } else {
                    decryptedText += inputText.charAt(i);
                }
            }
document.getElementById("result").textContent = "Decrypted Text: " + decryptedText;
        }



       // JavaScript code for Caesar cipher encryption and decryption

    function encryptC() {
        const inputText = document.getElementById("inputTextC").value;
        const shift = parseInt(document.getElementById("shift").value);
        const encryptedText = caesarCipherEncrypt(inputText, shift);
        document.getElementById("resultC").textContent = "Encrypted Text: " + encryptedText;
    }

    function decryptC() {
        const inputText = document.getElementById("inputTextC").value;
        const shift = parseInt(document.getElementById("shift").value);
        const decryptedText = caesarCipherDecrypt(inputText, shift);
        document.getElementById("resultC").textContent = "Decrypted Text: " + decryptedText;
    }
 function caesarCipherEncrypt(text, shift) {
        let resultC = "";
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const codeA = isUpperCase ? 65 : 97;
                const charCode = char.charCodeAt(0);
                const encryptedCharCode = (charCode - codeA + shift) % 26 + codeA;
                const encryptedChar = String.fromCharCode(encryptedCharCode);
                resultC += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
            } else {
                resultC += char;
            }
        }
        return resultC;
    }

    function caesarCipherDecrypt(text, shift) {
        return caesarCipherEncrypt(text, 26 - shift);
    }