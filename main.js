var n=prompt('Ingrese numero:');
if (2<=(n % 2 == 0)<5) {
 	document.write("GOOD!");
}

else if (6<=(n % 2 == 0)<=20){
	document.write("Great!");
}

else if ((n % 2 == 0)>20){
	document.write("Perfect!");
}

else {
document.write("Odd!(impar)");
}