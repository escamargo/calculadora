window.onload=Click;

var num1="";
var control=true;

function Click() {
	var uno=document.getElementById("uno1");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("uno2");
	dos.addEventListener("click",function() {
								clicEn("2");
								});
	var tres=document.getElementById("uno3");
	tres.addEventListener("click",function() {
								clicEn("3");
								});


	var cuatro=document.getElementById("uno6");
	cuatro.addEventListener("click",function() {
								clicEn("4");
								});


	var cinco=document.getElementById("uno7");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});


	var seis=document.getElementById("uno8");
	seis.addEventListener("click",function() {
								clicEn("6");
								});


	var siete=document.getElementById("uno11");
	siete.addEventListener("click",function() {
								clicEn("7");
								});


	var ocho=document.getElementById("uno12");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});


	var nueve=document.getElementById("uno13");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});

	var mas=document.getElementById("uno5");
	mas.addEventListener("click",function() {
								clicEn("+");
								});


	var cero=document.getElementById("uno16");
	cero.addEventListener("click",function() {
								clicEn("0");
								});

	var menos=document.getElementById("uno4");
	menos.addEventListener("click",function() {
								clicEn("-");
								});

	var division=document.getElementById("uno10");
	division.addEventListener("click",function() {
								clicEn("/");
								});

	var multiplicacion=document.getElementById("uno9");
	multiplicacion.addEventListener("click",function() {
								clicEn("*");
								});

	var igual=document.getElementById("uno17");
	igual.addEventListener("click",function() {
								calcular();
								});

	var borrar=document.getElementById("uno15");
	borrar.addEventListener("click",function() {
								operaciones();
								});
	
}

function clicEn(num){
	var imprimir=document.getElementById("uno");
	num1+=num;
	imprimir.textContent=num1;
}

function calcular(){
	 var fin=eval(num1)
	 var resu=document.getElementById("uno")
	 resu.textContent=fin;

}

function operaciones(){
	num1="";
	var resu=document.getElementById("uno")
	resu.textContent=num1;
}	