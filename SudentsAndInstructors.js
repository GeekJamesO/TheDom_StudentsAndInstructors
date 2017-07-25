/*
Students and Instructors

Part I
Given the following array of objects:
  var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
   ]
Create a program that outputs:

  Michael Jordan
  John Rosales
  Mark Guillen
  KB Tonel
Part II (Optional)
Now, given the following dictionary:
  var users = {
   'Students': [
       {first_name:  'Michael', last_name : 'Jordan'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
    ],
   'Instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
    ]
   }
Create a program that prints  the following format (including the number of characters in each combined name):
  Students
  1 - MICHAEL JORDAN - 13
  2 - JOHN ROSALES - 11
  3 - MARK GUILLEN - 11
  4 - KB TONEL - 7
  Instructors
  1 - MICHAEL CHOI - 11
  2 - MARTIN PURYEAR - 13
*/
function partOne(arr) {
  for (var k = 0; k < arr.length; k++) {
    console.log(arr[k].first_name + " " + arr[k].last_name );
  }
}

var students = [
   {first_name:  'Michael', last_name : 'Jordan'},
   {first_name : 'John', last_name : 'Rosales'},
   {first_name : 'Mark', last_name : 'Guillen'},
   {first_name : 'KB', last_name : 'Tonel'}
 ];
partOne(students);
console.log("  ");
console.log("  ");

function partTwo(arr)  {
  console.log("Students:")
  for (var k = 0; k < arr.Students.length; k++) {
    console.log("  " + (k + 1) + "  -  " + arr.Students[k].first_name + " " + arr.Students[k].last_name );
  }
  console.log("Instructors:")
  for (var k = 0; k < arr.Instructors.length; k++) {
    console.log("  " + (k + 1) + "  -  " + arr.Instructors[k].first_name + " " + arr.Instructors[k].last_name );
  }
}

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
};

partTwo(users);
