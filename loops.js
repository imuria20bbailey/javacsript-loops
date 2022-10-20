/**
 * Task
 * make an array of names that include your name. use each of these to iterate through your array. when we reach your name print 'this is my name'
 */

// Do...while...loop

// var names = ["barbra this is my name","joan","john"];

// do {
//     console.log(names[0]);
//     console.log(names[1]);
//     console.log(names[2]);
//   names++
   
// } while(names[0])

// // For...of...loop

// var names = ["barbra","joy","josh","brian"];

// for (n of names){
//   console.log(n)
// }

// // For...each...loop
// let array = ["barbra","jimmy","dante","grace"];

// array.forEach((item, index) => {

//     console.log(item);
// });

// Another research work.

// let names = ['Cathy','Emmy','Mercy','Barbra','Julie'];

// // Do while loop
// let index = 0;
// do {
//     if(index==3)
//     {
//      console.log('this is barbra:' + names[3]);
//      document.write('this is my name:' + names[3]);
//     }
//     index++;
// } while(index<names.length);

// //For for loop
// for(let name of names){
//     if(name=='barbra')
//     {
//     console.log('this is my name:' + name);
//     document.write('this is my name:' + name)
// }
// }

// //for each loop
// names.forEach(function(name, index){
//     if(name=='barbra'){
//         console.log('this is my name:' + name);
//         document.write('this is my name:' + name)
//     }
// });


// final task consider this.
//ARRAY TO STORE THE NAMES 
let names = ['Cathy', 'Emmy', 'Mercy', 'Barbra', 'Julie'];


//DO WHILE LOOP

//Declaring and intializing variable index
let index = 0;

do {

   //Checking for index value at every iteration
    if (index == 3)
    {

    //Printing the result if the index value equals
   console.log('This is my name : ' + names[3]);

    }
  
  //Incrementing the index value by 1
    index++;

//Checking the condition before the next iteration 
} while ( index < names.length );


//FOR OF LOOP
for (let name of names) 
{
    //Checking for name Barbra at every iteration
    if (name == 'Barbra')
    {
	
  //Printing the result if the name equals 
	console.log('This is my name : ' + name)
   
 }
}


//FOR EACH LOOP
names.forEach(function (name, index) 
{
	//Checking for name Barbra at every iteration
	if (name == 'Barbra')
    {

	//Printing the result if the name equals 
	console.log('This is my name : ' + name)

    }

});
