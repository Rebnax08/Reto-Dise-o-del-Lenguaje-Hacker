function convertToLeet(text) {
    const leetChars = {
      h: 'h',
      o: '0',
      l: '1',
      a: '4',
      x: '><',
      d: 'd',
      e: '3',
      r: '|2',
      n: 'n',
      l: '|',
      k: '|<',
      i: '1',
      m: '|\/|',
      j: ']',
      g: '6',
      y: 'y'
    };
  
    let leetText = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toLowerCase();
      leetText += leetChars[char] || char;
    }
  
    return leetText;
  }
  
  function convertir() {
    const inputText = document.getElementById('texto').value;
    const leetText = convertToLeet(inputText);
    document.getElementById('leetText').value = leetText;
    document.getElementById('resultado').style.display = 'block';
  }