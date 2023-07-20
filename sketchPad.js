let initialSize = 16;
let container;
function randomColor(){
	return Math.round(Math.random() * (255 - 0) + 0);
}

let allDivs = new Array(initialSize * initialSize);
let allColorDivs = new Array(initialSize * initialSize);
for(let i=0;i<allDivs.length;i++){
	allDivs[i]=0;
	allColorDivs[i]=0;
}
let redPosition;
let greenPosition;
let bluePosition;

function hoveringOver(e){
	redPosition = randomColor();
	greenPosition = randomColor();
	bluePosition = randomColor();

	if(allDivs[e.target.textContent]==0){
		allColorDivs[e.target.textContent]=[redPosition,greenPosition,bluePosition];
		e.target.style.backgroundColor=`rgb(${redPosition},${greenPosition},${bluePosition})`;
		allDivs[e.target.textContent]=allDivs[e.target.textContent]+1;
		console.log(redPosition);
		console.log(greenPosition);
		console.log(bluePosition)
	}
	else if(allDivs[e.target.textContent]<10){
		redPosition = allColorDivs[e.target.textContent][0] - 29;
		greenPosition = allColorDivs[e.target.textContent][1] - 29;
		bluePosition = allColorDivs[e.target.textContent][2] - 29;
		if(redPosition<0){
			redPosition=0;
		}
		if(greenPosition<0){
			greenPosition=0;
		}
		console.log(greenPosition)
		if(bluePosition<0){
			bluePosition=0;
		}
		console.log(bluePosition)
		e.target.style.backgroundColor=`rgb(${redPosition},${greenPosition},${bluePosition})`;
		allColorDivs[e.target.textContent][0]=redPosition;
		allColorDivs[e.target.textContent][1]=greenPosition;
		allColorDivs[e.target.textContent][2]=bluePosition;
		allDivs[e.target.textContent]=allDivs[e.target.textContent]+1;

	}
		
	}

function drawSketchPad(number){
	allDivs = new Array(number * number);
	allColorDivs = new Array(number * number);
	for(let i=0;i<allDivs.length;i++){
		allDivs[i]=0;
		allColorDivs[i]=0;
	}
	let count=0;
	for(let i=1;i<=number;i++){
		let div = document.createElement(`div`);
		div.className=`grid`;
		for(let j=1;j<=number;j++){
			let div_inner = document.createElement(`div`);
			div_inner.className=`inner-div`;
			div_inner.textContent=`${count}`;
			div_inner.addEventListener(`mouseover`,hoveringOver);
			
			 div.appendChild(div_inner);
			 if(j==number){
			 	div_inner.className=div_inner.className+ ` last-line-horizontal`;
			 }
			 if(i==number){
			 	div_inner.className=div_inner.className+ ` last-line-vertical`;
			 }
			 count++;
		}

		container = document.getElementById('container');
		let container_width = window.innerWidth/2.25;
		let container_height = window.innerHeight;
		container.style.width=`${container_width}px`;
		container.style.height=`${container_width}px`;
		container.appendChild(div);
	}
	
}
drawSketchPad(initialSize);

function askForInput(e){

	let number = +prompt('Enter the number of squares');
	if(typeof number!='number' || number.toString()=='NaN'){
		alert('Please enter digits only! Click the red button on the left and try again.');
	}
	else if(number>100 || number<1){
		alert('Please enter a number between 1 and 100. Click the red button on the left and try again!');
	}
	else{
		let gridDivs = document.getElementsByClassName('inner-div');
		for(let i=0;i<gridDivs.length;i++){
			container.removeChild(gridDivs[i].parentNode);
		}
		
		drawSketchPad(number);
	}
}
let button = document.querySelector('button');
button.addEventListener('click',askForInput);
