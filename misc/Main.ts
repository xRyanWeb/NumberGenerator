const input = (<HTMLInputElement>document.getElementById("input")).value;

function getOperator(): any {
  let op = ["+", "-", "*"];
  for (let ops of op) {
    let randomOp = Math.floor(Math.random() * ops.length);
    return ops[randomOp];
  }

  let randomOp = Math.floor(Math.random() * op.length);
  return op[randomOp];
}

getOperator();
