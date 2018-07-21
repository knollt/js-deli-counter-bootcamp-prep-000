let katzDeli = []

function takeANumber (katzDeli, name){
// person take # & put at end of line for katzDeli
  katzDeli.push(name)
// return line position  
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing (line){

  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let name = line[0]
    line.splice(0,1)
    return "Currently serving " + name + "."
  }
}

function currentLine (line) {
  let lineNumber = []
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++){
      lineNumber += (i + 1) + ". " + line[i] + ', '
    }
    lineNumber = lineNumber.replace(/,\s*$/, "")
    return `The line is currently: ${lineNumber}`
  }  
}