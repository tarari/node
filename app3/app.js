var Flight=require('./vols');

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
//crear avió1
var pl1=new Flight();
pl1.fill(pl_data1);
//sortida de l'avió2
pl1.triggerDepart();

console.log(pl1.getInformation());

//crear avió2
var pl2=new Flight();
pl2.fill(pl_data2);
//sortida de l'avió2
pl2.triggerArrive();

console.log(pl2.getInformation());