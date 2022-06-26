module.exports = function toReadable (number) {
  let unitRead;
  let dozenRead;
  let dozen10and19;
  let hundredRead;

  if (number < 10) {
    switch (number) {
      case 0: 
      unitRead = 'zero';
        break;
      case 1: 
      unitRead = 'one';  
        break;
      case 2: 
      unitRead = 'two'; 
        break;
      case 3: 
      unitRead = 'three';
        break; 
      case 4: 
      unitRead = 'four';
        break; 
      case 5: 
      unitRead = 'five'; 
        break;
      case 6: 
      unitRead = 'six'; 
        break;
      case 7: 
      unitRead = 'seven';
        break; 
      case 8: 
      unitRead = 'eight';
        break; 
      case 9: 
      unitRead = 'nine';
        break; 
    }
  return unitRead;
  } 

  else if (number < 20) {
    switch (number) {
      case 10:
        dozenRead = 'ten';
        break;
      case 11:
        dozenRead = 'eleven';
        break;
      case 12:
        dozenRead = 'twelve';
        break;
      case 13:
        dozenRead = 'thirteen';
        break;
      case 14:
        dozenRead = 'fourteen';
        break;
      case 15:
        dozenRead = 'fifteen';
        break;
      case 16:
        dozenRead = 'sixteen';
        break;
      case 17:
        dozenRead = 'seventeen';
        break;
      case 18:
        dozenRead = 'eighteen';
        break;
      case 19:
        dozenRead = 'nineteen';
        break;
      }
      return dozenRead;
  }

  // second blok

  else if (number < 100) {
    let unit = number % 10;
    let dozen = number - unit;
      switch (unit) {
        case 0: 
        unitRead = '';  
          break; 
        case 1: 
        unitRead = 'one';  
          break;
        case 2: 
        unitRead = 'two'; 
          break;
        case 3: 
        unitRead = 'three';
          break; 
        case 4: 
        unitRead = 'four';
          break; 
        case 5: 
        unitRead = 'five'; 
          break;
        case 6: 
        unitRead = 'six'; 
          break;
        case 7: 
        unitRead = 'seven';
          break; 
        case 8: 
        unitRead = 'eight';
          break; 
        case 9: 
        unitRead = 'nine';
          break; 
      }

    switch (dozen) {
      case 20: 
      dozenRead = 'twenty'; 
        break;
      case 30: 
      dozenRead = 'thirty';
        break; 
      case 40: 
      dozenRead = 'forty';
        break; 
      case 50: 
      dozenRead = 'fifty'; 
        break;
      case 60: 
      dozenRead = 'sixty'; 
        break;
      case 70: 
      dozenRead = 'seventy';
        break; 
      case 80: 
      dozenRead = 'eighty';
        break; 
      case 90: 
      dozenRead = 'ninety';
        break; 
    }
    
  if (unit === 0) {
      return dozenRead;
    } 
  else {
    let a = (dozenRead + ' ' + unitRead);
    return a.trim();
    }
  }

// third blok

else if (number < 999) {
  let unit = number % 10;
  let dozen = (number - unit) % 100;
  let hundred = number - dozen - unit;

  switch (dozen + unit) {
    case 10:
      dozen10and19 = 'ten';
      break;
    case 11:
      dozen10and19 = 'eleven';
      break;
    case 12:
      dozen10and19 = 'twelve';
      break;
    case 13:
      dozen10and19 = 'thirteen';
      break;
    case 14:
      dozen10and19 = 'fourteen';
      break;
    case 15:
      dozen10and19 = 'fifteen';
      break;
    case 16:
      dozen10and19 = 'sixteen';
      break;
    case 17:
      dozen10and19 = 'seventeen';
      break;
    case 18:
      dozen10and19 = 'eighteen';
      break;
    case 19:
      dozen10and19 = 'nineteen';
      break;
    }

    switch (unit) {
      case 0: 
      unitRead = '';  
        break;
      case 1: 
      unitRead = 'one';  
        break;
      case 2: 
      unitRead = 'two'; 
        break;
      case 3: 
      unitRead = 'three';
        break; 
      case 4: 
      unitRead = 'four';
        break; 
      case 5: 
      unitRead = 'five'; 
        break;
      case 6: 
      unitRead = 'six'; 
        break;
      case 7: 
      unitRead = 'seven';
        break; 
      case 8: 
      unitRead = 'eight';
        break; 
      case 9: 
      unitRead = 'nine';
        break; 
    }
    
  switch (dozen) {
    case 20: 
    dozenRead = 'twenty'; 
      break;
    case 30: 
    dozenRead = 'thirty';
      break; 
    case 40: 
    dozenRead = 'forty';
      break; 
    case 50: 
    dozenRead = 'fifty'; 
      break;
    case 60: 
    dozenRead = 'sixty'; 
      break;
    case 70: 
    dozenRead = 'seventy';
      break; 
    case 80: 
    dozenRead = 'eighty';
      break; 
    case 90: 
    dozenRead = 'ninety';
      break; 
  }

  switch (hundred) {
    case 100: 
    hundredRead = 'one hundred';  
      break;
    case 200: 
    hundredRead = 'two hundred'; 
      break;
    case 300: 
    hundredRead = 'three hundred';
      break; 
    case 400: 
    hundredRead = 'four hundred';
      break; 
    case 500: 
    hundredRead = 'five hundred'; 
      break;
    case 600: 
    hundredRead = 'six hundred'; 
      break;
    case 700: 
    hundredRead = 'seven hundred';
      break; 
    case 800: 
    hundredRead = 'eight hundred';
      break; 
    case 900: 
    hundredRead = 'nine hundred';
      break; 
  }

  if ((dozen + unit) < 10) {
    let a = (hundredRead + ' ' + unitRead);
    return a.trim();
  }
  else if ((dozen + unit) < 20) {
      return (hundredRead + ' ' + dozen10and19);
    }
    else if (unit === 0 && (dozen + unit) >= 20) {
      let a = (hundredRead + ' ' + dozenRead);
      return a.trim();
    } else if (unit !== 0 && (dozen + unit) >= 20) {      
        let a = (hundredRead + ' ' + dozenRead + '-' + unitRead);
        return a.trim();
    }
  }
}

