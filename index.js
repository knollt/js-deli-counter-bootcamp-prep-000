let katzDeli = []

function takeANumber (katzDeli, name){
  // accept current line of people + personName
  // return position in line
  katzDeli.push(name)
  
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
  
}

function nowServing (line){
  // return first person etc
  // nobody = "There is nobody to be served"
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let name = line[0]
    line.splice(0,1)
    return "Currently serving " + name + "."
  }
}

function currentLine (line) {
  // returns line position
  // empty = "The line is currently empty"
  let lineNumber = []
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++){
      lineNumber += (i + 1) + ". " + line[i] + ', '
    }
    
    return "The line is currently: " + ${lineNumber}
  }  
}