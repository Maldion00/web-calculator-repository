var result = document.querySelector('.result');
var button = document.querySelectorAll('.button');

for(item of button)
{
	item.addEventListener('click', (e)=>{
		buttonText = e.target.innerText;
		result.value += buttonText;
	})
}

function del()
{
	result.value = result.value.substr(0,result.value.length - 1);
}



function changeStyle(value){
	
	var body= document.getElementsByClassName("body");
	var top = document.getElementsByClassName("top");
	var r = document.getElementsByClassName("result");
	var b = document.getElementsByClassName("button");
	var eq = document.getElementById("EQUAL");
	var de = document.getElementById("DEL");
	var re = document.getElementById("RESET");
	var bb = document.getElementsByClassName("button-box");

	if(value == 0){
		document.body.style.backgroundColor = "hsl(222, 26%, 31%)";

		for(var i = 0; i < top.length; i++){
			top[i].style.color = 'white';
		}
		for(var i = 0; i < r.length; i++){
			r[i].style.backgroundColor = 'hsl(268, 71%, 12%)';
			r[i].style.color = 'white';
		}
		for(var i = 0; i < b.length; i++){
			b[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
			b[i].style.borderBottom = 'solid hsl(28, 16%, 65%)';
			b[i].style.color = 'hsl(221, 14%, 31%)';
		}
		eq.style.backgroundColor = "hsl(6, 63%, 50%)";
		eq.style.borderBottom = "solid hsl(224, 28%, 35%)";
		eq.style.color = "white";

		de.style.backgroundColor = "hsl(225, 21%, 49%)";
		de.style.borderBottom = "solid hsl(224, 28%, 35%)";
		de.style.color = "white";

		re.style.backgroundColor = "hsl(225, 21%, 49%)";
		re.style.borderBottom = "solid hsl(224, 28%, 35%)";
		re.style.color = "white";

		for(var i = 0; i < bb.length; i++){
			bb[i].style.backgroundColor = 'hsl(223, 31%, 20%)';
		}
		
	}
	if(value == 1){
		
		document.body.style.backgroundColor = "hsl(0, 0%, 90%)";

		for(var i = 0; i < top.length; i++){
			top[i].style.color = 'black';
		}
		for(var i = 0; i < r.length; i++){
			r[i].style.backgroundColor = 'hsl(0, 0%, 93%)';
			r[i].style.color = 'black';
		}
		for(var i = 0; i < b.length; i++){
			b[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
			b[i].style.borderBottom = 'solid hsl(35, 11%, 61%)';
			b[i].style.color = 'hsl(60, 10%, 19%)';
		}
		eq.style.backgroundColor = "hsl(25, 98%, 40%)";
		eq.style.borderBottom = "solid hsl(25, 99%, 27%)";
		eq.style.color = "white";

		de.style.backgroundColor = "hsl(185, 42%, 37%)";
		de.style.borderBottom = "solid hsl(185, 58%, 25%)";
		de.style.color = "white";

		re.style.backgroundColor = "hsl(185, 42%, 37%)";
		re.style.borderBottom = "solid hsl(185, 58%, 25%)";
		re.style.color = "white";

		for(var i = 0; i < bb.length; i++){
			bb[i].style.backgroundColor = ' hsl(0, 5%, 81%)';
		}
		
	}
	if(value == 2){
		document.body.style.backgroundColor = "hsl(268, 75%, 9%)";

		for(var i = 0; i < top.length; i++){
			top[i].style.color = 'hsl(52, 100%, 62%)';
		}
		for(var i = 0; i < r.length; i++){
			r[i].style.backgroundColor = 'hsl(268, 71%, 12%)';
			r[i].style.color = 'hsl(52, 100%, 62%)';
		}
		for(var i = 0; i < b.length; i++){
			b[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
			b[i].style.borderBottom = 'solid hsl(290, 70%, 36%)';
			b[i].style.color = 'hsl(52, 100%, 62%)';
		}
		eq.style.backgroundColor = "hsl(176, 100%, 44%)";
		eq.style.borderBottom = "solid hsl(177, 92%, 70%)";
		eq.style.color = "black";

		de.style.backgroundColor = "hsl(281, 89%, 26%)";
		de.style.borderBottom = "solid hsl(285, 91%, 52%)";
		de.style.color = "white";

		re.style.backgroundColor = "hsl(281, 89%, 26%)";
		re.style.borderBottom = "solid hsl(285, 91%, 52%)";
		re.style.color = "white";

		for(var i = 0; i < bb.length; i++){
			bb[i].style.backgroundColor = 'hsl(268, 71%, 12%)';
		}
	}

}
	