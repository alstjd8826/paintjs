const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");


ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;


let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    // console.log(event); /*마우스가 움직일 때 마다 값들이 표시된다.*/
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x,y);
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);//지정된 (x, y) 좌표로 지정된 지점에서 새 하위 경로를 시작
    } else{
        ctx.lineTo(x,y); //하위 경로의 마지막 점을 지정된(x, y) 좌표에 연결하여 현재 하위 경로에 직선을 추가
        ctx.stroke();
    }
}

// input 값이 변경될때 작동하는 함수 : 색 변경
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

// input 값이 변경될때 작동하는 함수 : 굵기 변경
function handleRangeChange(event){
    // console.log(event.target.value); 
    const strokeSize = event.target.value;
    ctx.lineWidth = strokeSize;
}

function handleModeClick(event){
    //console.log(event);
    if(filling === true){
        filling = false;
        mode.innerText = "FILL";
    } else{
        filling = true;
        mode.innerText = "PAINT";
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); /* 마우스 클릭할 때*/
    canvas.addEventListener("mouseup", startPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

//if() 괄호 안에 아무거나 넣어도 돌아는 간다?
if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}