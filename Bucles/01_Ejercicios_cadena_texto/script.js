function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const inputElement = document.getElementById('input-id'); // replace 'input-id' with the actual input element ID
  const inputValue = inputElement.value;
  const reversedValue = reverseString(inputValue);
  
  const outputElement = document.getElementById('output-id'); // replace 'output-id' with the actual output element ID
  outputElement.value = reversedValue;