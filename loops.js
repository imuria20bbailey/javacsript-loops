/**
 * Task
 * make an array of names that include your name. use each of these to iterate through your array. when we reach your name print 'this is my name'
 */

// Do...while...loop

var names = ["barbra this is my name","joan","john"];

do {
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
  names++
   
} while(names[0])

// For...of...loop

var names = ["barbra","joy","josh","brian"];

for (n of names){
  console.log(n)
}

// For...each...loop
let array = ["barbra","jimmy","dante","grace"];

array.forEach((item, index) => {

    console.log(item);
});