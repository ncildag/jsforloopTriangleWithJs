let lineToprintTriangle = ''

for (let i = 0; i < 10; i++) {
    lineToprintTriangle += ' * '

  console.log(lineToprintTriangle)
}

function carpim (a, b) {
  return a * b
}

for (let a = 1; a < 13; a++) {
  let lineToprintPascal = ' '
  for (let b = 1; b < 13; b++) {
    lineToprintPascal += (a * b) + '   '
  }
  console.log(lineToprintPascal)
}

for (let i = 0;i < 12;i++) {
  let lineToPrintMatrix = ' '
  for (let j = 0; j < 12; j++) {
    if (i === j) {
        lineToPrintMatrix += 1 + ' '
    }else {lineToPrintMatrix += 0 + ' ';}
  }
  console.log(lineToPrintMatrix)
}

function printReserveMatrix(){
for(let i=0;i<12;i++){
let satiricerigii="";
for(let j=0;j<12;j++){
if(i+j==11){
  satiricerigii+=1+" ";
}else{
  satiricerigii+=0+" ";
}

}
console.log(satiricerigii);
}

}


console.log("TERS KOSEGEN");

printreservematrix();