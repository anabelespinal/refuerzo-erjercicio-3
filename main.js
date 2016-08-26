var n=prompt('Ingrese numero:');
if (n % 2 == 0 && n>=2 && n<5) {
 	document.write("GOOD!");
}

else if (n % 2 == 0 && n>=6 && n<=20){
	document.write("Great!");
}

else if (n % 2 == 0 && n>20){
	document.write("Perfect!");
}

else {
	document.write("Odd!");
}