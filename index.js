let body = document.querySelector(".body");
let peres = document.querySelector(".peres");
// Комнаты
let main = document.querySelector(".main");


let toMain = function(){
	main.style.display = "block";
	body.style.background = "url(img/main.svg)";
	body.style.backgroundSize = "100% auto";
	math.style.display = "none";
	pe.style.display = "none";
	chem.style.display = "none";
}

let roomM1 = false;
let roomM2 = false;
let roomM3 = false;

let mst1 = true;
let mst2 = true;
let mst3 = true;
let five1 = document.querySelector(".five1");
let five2 = document.querySelector(".five2");
let five3 = document.querySelector(".five3");

// МатКомната
let a = 12;

let mathRoom = document.querySelector(".mathRoom");
let math = document.querySelector(".math");

let B1 = document.querySelector(".B1");

let timePol = document.querySelector(".timePol");
let timeBar = document.querySelector(".timeBar");

let sch = 0;

let sec = 0;
let timeCounter = function(){
	sec = sec + 50;
	timePol.style.width = sec + "px";
	if(sec == 600){
		timePol.style.background = "yellow";
	}else if(sec == 800){
		timePol.style.background = "red";
	}
}


let fst = null;

let row = document.querySelector(".row");
let images = ["img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg", "img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg"];

let random = function(arg){
    let rand = Math.round(Math.random()*arg);
    return rand;
}


let showB1 = function(){
	B1.style.opacity = "50%";
}
let hideB1 = function(){
	B1.style.opacity = "0%";
}


mathRoom.onclick = function(){
	main.style.display = "none";
	body.style.background = "grey";
	roomM1 = true;

	let showMath = function(){
		math.style.display = "block";
		let timeInt = setInterval(timeCounter, 1000);
		for(let i=0; i<12; i++){
		    let index = random(images.length - 1);
		    let item = document.createElement("div");
		   	item.image = images[index];
		    row.appendChild(item);
		    item.classList.add("item");
		    item.style.backgroundImage = "url(" + images[index] + ")";
		    images.splice(index, 1)
		   	item.onclick = function(){
		        item.classList.add("gr");
		        if(fst == null){
		        fst = item;
		        }
		        else if(item.image == fst.image){
		            item.style.visibility = "hidden";
		            fst.style.visibility = "hidden";
		            fst = null;
		            sch = sch + 1;
		        }
		        else if(item.image != fst.image){
		            fst.classList.remove("gr");
		            item.classList.remove("gr");
		            fst = null;
		        }
		    }
		}

		let itog = function(){
			if(sch == 6){
				row.style.display = "none";
			    alert("Ты получил 5!");
			    clearInterval(timeInt)
			    sec = 0;
			    timePol.style.width = sec + "px";
				timePol.style.background = "green";
				timePol.style.display = "none";
				timeBar.style.display = "none";
				five1.style.visibility = "visible";
				mst1 = false;
				roomM1 = false;
				setTimeout(toMain, 2000)
				if(mst1 == false && mst2 == false && mst3 == false){
					alert("Поообеда!")
				}
			}
			else{
			    alert("Ты не успел!");
			    clearInterval(timeInt)
			    sec = 0;
				let itemM = document.querySelectorAll(".item");
			    for(let i=0; i<a; i++){
			    	itemM[i].style.display = "none";
			    }
			    timePol.style.width = sec + "px";
				timePol.style.background = "green";
				peres.style.display = "block";
				peres.onclick = function(){
					if(roomM1 == true){
						a = a + 12;
						peres.style.display = "none";
						sec = 0;
						sch = 0;
						let timeInt = setInterval(timeCounter, 1000);
						let itogTim = setTimeout(itog, 21000)
						let images = ["img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg", "img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg"];
						for(let i=0; i<12; i++){
						    let index = random(images.length - 1);
						    let item = document.createElement("div");
						   	item.image = images[index];
						    row.appendChild(item);
						    item.classList.add("item");
						    item.style.backgroundImage = "url(" + images[index] + ")";
						    images.splice(index, 1)
						   	item.onclick = function(){
						        item.classList.add("gr");
						        if(fst == null){
						        fst = item;
						        }
						        else if(item.image == fst.image){
						            item.style.visibility = "hidden";
						            fst.style.visibility = "hidden";
						            fst = null;
						            sch = sch + 1;
						        }
						        else if(item.image != fst.image){
						            fst.classList.remove("gr");
						            item.classList.remove("gr");
						            fst = null;
						        }
						    }
						}
					}else if(roomM2 == true){
						for(let i=0; i<15; i++){
							let ball = document.createElement("div");
							pe.appendChild(ball);
							ball.classList.add("ball");
							leftS = random(1600);
							ball.style.left = leftS + "px";
						}
					}	
				}
			}
		}
		let itogTim = setTimeout(itog, 21000)
	}
	
	setTimeout(showB1, 1000)
	setTimeout(hideB1, 4000)
	setTimeout(showMath, 2000)
}




// Спортзал

let PERoom = document.querySelector(".PERoom");
let pe = document.querySelector(".PE");
let B2 = document.querySelector(".B2");

let score = document.querySelector(".score");
let sc = 0;
score.innerHTML = sc;

let topS = 0;
let leftS = null;

let sphereInd = 0;

let showB2 = function(){
	B2.style.opacity = "50%";
}
let hideB2 = function(){
	B2.style.opacity = "0%";
}


PERoom.onclick = function(){
	main.style.display = "none";
	body.style.background = "green";
	roomM2 = true;

	let showPE = function(){
		pe.style.display = "block";
		let itog2 = function(){
			if(sc != 10){
				alert("Ты не смог поймать 10!");
				for(let i=0; i<15; i++){
					ball[i].style.display = "none";
				}
				peres.style.display = "block";
				peres.onclick = function(){
					peres.style.display = "none";
					if(roomM1 == true){
						a = a + 12;
						sec = 0;
						sch = 0;
						let timeInt = setInterval(timeCounter, 1000);
						let itogTim = setTimeout(itog, 21000)
						let images = ["img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg", "img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg"];
						for(let i=0; i<12; i++){
							let index = random(images.length - 1);
							let item = document.createElement("div");
							item.image = images[index];
							row.appendChild(item);
							item.classList.add("item");						    
							item.style.backgroundImage = "url(" + images[index] + ")";						    
							images.splice(index, 1)
							item.onclick = function(){
							    item.classList.add("gr");
							    if(fst == null){
							    fst = item;
							    }
								else if(item.image == fst.image){
								    item.style.visibility = "hidden";
								    fst.style.visibility = "hidden";
								    fst = null;
								    sch = sch + 1;
								}
								else if(item.image != fst.image){
								    fst.classList.remove("gr");
								    item.classList.remove("gr");
								    fst = null;
								}
							}
						}
					}else if(roomM2 == true){
						showPE()
						sc = 0;
						score.innerHTML = sc;
					}	
				}	
			}	
		}
		setTimeout(itog2, 35000)


		for(let i=0; i<15; i++){
			let ball = document.createElement("div");
			pe.appendChild(ball);
			ball.classList.add("ball");
			leftS = random(1600);
			ball.style.left = leftS + "px";


			ball.onclick = function(){
				ball.style.display = "none";
				topS = 500;
				sc = sc + 1;
				score.innerHTML = sc;
				if(sc >= 10){
					ball.style.display = "none";
				    alert("Ты получил 5!");
					stop()
					five2.style.visibility = "visible";
					mst2 = false;
					roomM2 = false;
					setTimeout(toMain, 2000)
					if(mst1 == false && mst2 == false && mst3 == false){
						alert("Поообеда!")
					}
				}
			}
		}

		let ball = document.querySelectorAll(".ball");

		let stop = function(){
			clearInterval(IntFly);
		}


		let fly = function(){
			topS = topS + 150;
			ball[sphereInd].style.top = topS + "px";
			if(topS >= 1200){
				topS = 0;
				sphereInd = sphereInd + 1;
				if(sphereInd == 15){
					stop();
				}
			}
		}
		
		let IntFly = setInterval(fly, 300);
		
	}

	setTimeout(showB2, 1000)
	setTimeout(hideB2, 4000)
	setTimeout(showPE, 2000)
}



// Химия

let chemRoom = document.querySelector(".chemRoom");
let chem = document.querySelector(".chem");
let b3 = document.querySelector(".B3");

let showB3 = function(){
	b3.style.opacity = "50%";
}
let hideB3 = function(){
	b3.style.opacity = "0%";
}

let zad1 = true;
let zad1otv = false;
let zad2 = false;
let zad2otv = false;
let zad3 = false;
let zad3otv = false;

let bukA1 = document.querySelector(".bukA1");
let bukB1 = document.querySelector(".bukB1");
let bukC1 = document.querySelector(".bukC1");

let bukA2 = document.querySelector(".bukA2");
let bukB2 = document.querySelector(".bukB2");
let bukC2 = document.querySelector(".bukC2");

let bukA3 = document.querySelector(".bukA3");
let bukB3 = document.querySelector(".bukB3");
let bukC3 = document.querySelector(".bukC3");



chemRoom.onclick = function(){
	main.style.display = "none";
	body.style.background = "cyan";
	roomM3 = true;

	let showChem = function(){
		chem.style.display = "block";
		let itog3 = function(){
			if(zad1otv == true && zad2otv == true && zad3otv == true){
				alert("Ты получил пять!");
				five3.style.visibility = "visible";
				mst3 = false;
				roomM3 = false;
				setTimeout(toMain, 2000)
				if(mst1 == false && mst2 == false && mst3 == false){
					alert("Поообеда!")
				}
			}else{
				alert("Ты не сдал");
				
				peres.style.display = "block";
				peres.onclick = function(){
					peres.style.display = "none";
					if(roomM1 == true){
						a = a + 12;
						sec = 0;
						sch = 0;
						let timeInt = setInterval(timeCounter, 1000);
						let itogTim = setTimeout(itog, 21000)
						let images = ["img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg", "img/mathRoom/1.svg", "img/mathRoom/2.svg", "img/mathRoom/3.svg", "img/mathRoom/4.svg", "img/mathRoom/5.svg", "img/mathRoom/6.svg"];
						for(let i=0; i<12; i++){
							let index = random(images.length - 1);
							let item = document.createElement("div");
							item.image = images[index];
							row.appendChild(item);
							item.classList.add("item");						    
							item.style.backgroundImage = "url(" + images[index] + ")";						    
							images.splice(index, 1)
							item.onclick = function(){
							    item.classList.add("gr");
							    if(fst == null){
							    fst = item;
							    }
								else if(item.image == fst.image){
								    item.style.visibility = "hidden";
								    fst.style.visibility = "hidden";
								    fst = null;
								    sch = sch + 1;
								}
								else if(item.image != fst.image){
								    fst.classList.remove("gr");
								    item.classList.remove("gr");
								    fst = null;
								}
							}
						}
					}else if(roomM2 == true){
						showPE()
					}else if(roomM3 == true){
						bukA1.style.display = "block";
						bukB1.style.display = "block";
						bukC1.style.display = "block";
						bukA2.style.display = "block";
						bukB2.style.display = "block";
						bukC2.style.display = "block";
						bukA3.style.display = "block";
						bukB3.style.display = "block";
						bukC3.style.display = "block";
						zad1 = true;
						zad2 = false;
						zad3 = false;
					}	
				}	
			}	
		}

		document.addEventListener("keydown", function(e){
			console.log(e.code)
			if(zad1 == true){
				if(e.code == "KeyA"){
					bukB1.style.display = "none";
					bukC1.style.display = "none";
					zad1otv = false;
					zad1 = false;
					zad3 = false;
					zad2 = true;
					e.code = null;
				}else if(e.code == "KeyB"){
					bukA1.style.display = "none";
					bukC1.style.display = "none";
					zad1otv = true;
					zad1 = false;
					zad3 = false;
					zad2 = true;
					e.code = null;
				}else if(e.code == "KeyC"){
					bukA1.style.display = "none";
					bukB1.style.display = "none";
					zad1otv = false;
					zad1 = false;
					zad3 = false;
					zad2 = true;
					e.code = null;
				}
			}else if(zad2 == true){
				if(e.code == "KeyA"){
					bukB2.style.display = "none";
					bukC2.style.display = "none";
					zad2otv = true;
					zad1 = false;
					zad2 = false;
					zad3 = true;
					e.code = null;
				}else if(e.code == "KeyB"){
					bukA2.style.display = "none";
					bukC2.style.display = "none";
					zad2otv = false;
					zad1 = false;
					zad2 = false;					
					zad3 = true;
					e.code = null;
				}else if(e.code == "KeyC"){
					bukA2.style.display = "none";
					bukB2.style.display = "none";
					zad2otv = false;
					zad1 = false;
					zad2 = false;
					zad3 = true;
					e.code = null;
				}
			}else if(zad3 == true){
				if(e.code == "KeyA"){
					bukB3.style.display = "none";
					bukC3.style.display = "none";
					zad3otv = false;
					zad2 = false;
					zad3 = false;
					e.code = null;
					setTimeout(itog3, 1000)
				}else if(e.code == "KeyB"){
					bukA3.style.display = "none";
					bukC3.style.display = "none";
					zad3otv = false;
					zad2 = false;
					zad3 = false;
					e.code = null;
					setTimeout(itog3, 1000)
				}else if(e.code == "KeyC"){
					bukA3.style.display = "none";
					bukB3.style.display = "none";
					zad3otv = true;
					zad2 = false;
					zad3 = false;
					e.code = null;
					setTimeout(itog3, 1000)
				}
			}
		
		})

	}
	setTimeout(showB3, 1000)
	setTimeout(hideB3, 4000)
	setTimeout(showChem, 2000)
}