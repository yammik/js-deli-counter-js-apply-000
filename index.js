function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line`;
}

function nowServing(katzDeliLine) {
  var custServed = katzDeliLine.shift();
  return `Currently serving ${custServed}`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var result = 'The line is currently: ';
    for (var i = 0; i < katzDeliLine; i += 1) {
      if (i === katzDeliLine.length - 1) {
        result += orderOfLine(i, katzDeliLine[i]);
      } else {
        result += `${orderOfLine(i, katzDeliLine[i])}, `
      }
    }
  } else {
    return 'The line is currently empty.';
  }
}

function orderOfLine(index, name) {
  return `${index + 1}. ${name}`;
}