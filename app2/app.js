var flight=require('./vols');

var pl_data1={
	number:847,
	origin:'BCN',
	destination:'MAD'
};

var pl_data2={
	number:848,
	origin:'MAD',
	destination:'BCN'
};
//crear avió
var pl1=flight(pl_data1);
//sortida de l'avió
pl1.triggerDepart();

console.log(pl1.getInformation());

//crear avió2
var pl2=flight(pl_data2);
//sortida de l'avió
pl2.triggerArrive();

console.log(pl2.getInformation());