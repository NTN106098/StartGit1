 var whatDoYouDo = function(job, firstName) {
 	switch(job) {
 		case 'teacher':
 			return firstName  + 'teaccher kid how to code';
 		case 'driver':
 			return firstName  + ' drives a cab in Lisbon';
 		case 'designer':
 			return firstName  + ' dseigns beaytiful web';
 		default:
 			return firstName  + 'does something else';
 	}
 }
 	console.log(whatDoYouDo("teacher", "John"));
 	 	console.log(whatDoYouDo("taxi", "Mark"));
 	 	 	console.log(whatDoYouDo("designer","TIm"));