// Call the initialize function on page load
window.onload=initialize; 

function initialize()
{
    // Display start message
    console.log("In initialize()");
    // Call the conditions function
    conditions();
    // Call the loops function
    loops();
    // Call the objects function
    objects();
}

// if and switch statements
function conditions()
{
    // Create some variables to compare
    let num1 = 10;
    let num2 = 5;
    let text1 = "Mark";
    let text2 = "Mary";

    // Do some comparisons with if statements using numbers
    if (num1 == num2)
    {
        console.log("Number 1 is equal to number 2");
    }

    else
    {
        console.log("Number 1 is not equal to number 2");
    }

    if (num2 > num1)
    {
        console.log("Number 2 is greater than number 1");
    }

    else if (num2 < num1)
    {
        console.log("Number 2 is less than number 1");
    }

    else
    {
        console.log("Number 2 is equal to number 1");
    }

    // Do some comparisons with if statements using strings
    if (text1 == text2)
    {
        console.log("Text 1 is equal to number 2");
    }

    else 
    {
        console.log("Text 1 is not equal to number 2");
    }

    if (text1 >= text2)
    {
        console.log("Text 1 is greater than or equal to text 2");
    }

    else
    {
        console.log("Text 1 is less than text 2");
    }

    // Do comparisons with a switch statement using numbers
    switch(num2)
    {
        case 0:
            console.log("Nuber 2 is equal to 0");
            break;
        case 1:
            console.log("Number 2 is equal to 1");
            break;
        case 2:
            console.log("Number 2 is equal to 2");
            break;
        case 3:
            console.log("Number 2 is equal to 3");
            break;
        case 4:
            console.log("Number 2 is equal to 4");
            break;
        case 5:
            console.log("Number 2 is equal to 5");
            break;
        default:
            console.log("Number 2 is an unknown value");
            break;
    }

    // Do a comparison with the ternary operator
    num1 == num2 ? console.log("Using Ternary Operator - Number 1 is equal to number 2") : console.log("Using Ternary Operator - Number 1 is not equal to number 2");
}

function loops()
{
    // Create an array that we can loop over
    let shapes = new Array('Triangle' , 'Circle' , 'Square');

    // Loop through the array with a for loop
    for (index = 0; index < shapes.length; ++index)
    {
        console.log("Using a for loop getting an array value of " + shapes[index] + " at " + index);
    }

    // For loop that prints all even array items
    for (index = 0; index < shapes.length; ++index)
    {
        if (index % 2 == 0)
        {
            console.log("Using a for loop to print even array items, array value of " + shapes[index] + " at " + index);
        }
    }

    // While loop that prints all array items
    let i = 0;
    while (i < shapes.length)
    {
        console.log("Using a while loop to get the array value of " + shapes[i] + " at " + i);
        i++;
    }

    // Do while loop that prints all elements in the array
    i = 0;
    do
    {
        console.log("Using a do while loop the array value of " + shapes[i] + " at " + i);
        i++;
    }

    while(i < shapes.length)
}

function objects()
{
    // Create person 1 object with some properties using JavaScript Notation
    let person1 =
    {
        firstName: "Bob",
        lastName: "Johnson",
        age: 25,
        occupation: "Student"
    };

    console.log('This is person 1 ' + person1.firstName + " " + person1.lastName + " who is " + person1.age + " years old and is a " + person1.occupation);

    // Create person2 object with the same properties using an object
    let person2 = new Object();
    person2.firstName = "Billy";
    person2.lastName = "White";
    person2.age = 35;
    person2.occupation = "Professor";

    console.log("This is person 2 " + person2.firstName + " " + person2.lastName + " who is " + person2.age + " years old and is a " + person2.occupation);
    
    // Create a person objet with a constructor
    function Person(firstName, lastName, age, occupation)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }

    let person3 = new Person("Mary", "Jackson", 50, "Dean");
    let person4 = new Person("John", "Lennon", 80, "Musician");

    console.log("This is person 3 " + person3.firstName + " " + person3.lastName + " who is " + person3.age + " years old and is a " + person3.occupation);
    console.log("This is person 4 " + person4.firstName + " " + person4.lastName + " who is " + person4.age + " years old and is a " + person4.occupation);

    // Create another Person object with some properties and a constructor and method to display its properties
    function EnhancedPerson(firstName, lastName, age, occupation)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.display = function()
        {
            console.log("This is an Enhanced Person " + this.firstName + " " + this.lastName + " who is " + this.age + " years old and is a " + this.occupation);
        };
    }

    let person5 = new EnhancedPerson("Paul", "McCartney", 78, "Musician");
    person5.display();
}