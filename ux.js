document.onkeydown = checkKey;

function checkKey(e){
  if(e.keyCode == '38'){
    //up arrow
    console.log("Up");
    moveup();

  }else if(e.keyCode == '37'){
    //left arrow
    console.log("Left");
    moveleft();

  }else if(e.keyCode == '40'){
    //down arrow
    console.log("Down");
    movedown();

  }else if(e.keyCode == '39'){
    //right arrow
    console.log("Right");
    moveright();
  }
}

const showCoord = document.getElementById('coordinates');
const showSpeed = document.getElementById('speed');

function showStatus(xSpeed, ySpeed, block){
  //console.log(xSpeed);
  // const xAxis = block.x - 225;
  // const yAxis = Math.abs(block.y - 240);
  
  //console.log(block.x + ' ' + block.y);
  showCoord.innerHTML = `
    X: ${block.x} Y: ${block.y}
  `;

  let horizontal = '';
  let vertical = '';
  if(xSpeed < 0){
    horizontal = `<i class="fas fa-long-arrow-alt-left"></i> ${Math.abs(xSpeed)}`;
    console.log(horizontal);
  } else if(xSpeed > 0){
    horizontal = `<i class="fas fa-long-arrow-alt-right"></i> ${Math.abs(xSpeed)}`;
  }else{
    horizontal = `${Math.abs(xSpeed)}`;
  }
  if(ySpeed < 0){
    vertical = `<i class="fas fa-long-arrow-alt-down"></i> ${Math.abs(ySpeed)}`;
    console.log(vertical);
  } else if(ySpeed > 0){
    vertical = `<i class="fas fa-long-arrow-alt-up"></i> ${Math.abs(ySpeed)}`;
  }else{
    vertical = `${Math.abs(ySpeed)}`;
  }


  showSpeed.innerHTML = horizontal + ' | ' + vertical
}

function fromHome(){
  
}