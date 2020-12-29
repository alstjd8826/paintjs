const canvas = document.getElementById("jsCanvas");

function onMouseMove(event){
    // console.log(event); /*마우스가 움직일 때 마다 값들이 표시된다.*/
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x,y);
}

function onMouseDown(event){
    console.log(event);
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown); /* 마우스 클릭할 때*/
}