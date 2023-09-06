//#region Comments
    //Single line comments can be written with a double forward slash (//)

    /*
    Multiline comments are used to save space, or to comment out a large block of code.
    They're great for saving space, since they can be folded, and 
    everything within the tags (/ *) will be interpreted as a comment, even if 
    you hit 'Enter'
    
    * For this course, I'll be using the Better Comments extension to help highlight particular areas.
    * This marker will be used for headers, and any console inputs.

    ! Comments are of high importance, and will often be used to denote where things can be written and what should not be modified.

    (?) Comments can provide helpful context for sections.

    Result: comments will be used almost exclusively in the completed code files to show a possible way of completing the code.
    + They will also typically be listed at the end of a function or an object.

Note: Comments will be used when other options are possible, or to make a note of a particular line
- these will often be pushed entirely to the left.

    ToDo: comments will be used for the starter files, so that we can see what we need to do.

    // comments are used to cross out items on the todo list, and look like (////).

    //(?)This feature also works for colored comments, but will not change the color to grey if other tags are used with it.

    #region Comments are used to make regions less obtrusive.

    > These are used to note a step in a particular process, or, as you'll see below, mark a detail. 
    */

    //#region I'd like to hide this
        /*Clicking the arrow next to the region tag 
        can collapse the entirety of this message, 
        or anything contained within it*/
    //#endregion
//#endregion



//#region General Syntax
    var variablesLikeSo = "See?";

    const CONSTANTSLIKESO = 10;

    //Comments like so

    function written(like, so){
    };
    //A code block is anything that exists within a {--}
//#endregion



//#region Variable Types
    var thisIsAVariable =
        "var variables are used to hold data that changes throughout the program.";

    let thisIsALetVariable =
        "let variables are used to hold data that is meant to stay the same outside of a scope.";

    const THIS_IS_A_CONSTANT =
        `const variables are used to hold data that is meant to stay the same, 
        both inside and outside of the scopes`;
//#endregion



//#region Literals vs Variables
    var variableValues = "var / let / const";

    /* Literal Values =
    (?) integers(whole numbers), strings, expressions)
    */
//#endregion



//#region Operators
    ((8 * 10) - 3 / 2) + 5;             //> Arithmetic 

    var x = 0;                          //> Assignment
    let y = 2;
    let z = x + y;
    let z1 = 2

    x !== y;                            //> Comparison
    x <= y; 
    z === z1;

    let text1 = "John";                 //> String 
    let text2 = "Doe";
    let text3 = text1 + " " + text2;   
    // Result: "John Doe"
//#endregion



//#region Data Types
    //* Object Data Type *\\
    const OBJECT_DATA_TYPE = {

/*
Note: All of these items function as properties of the Object. 
*/
        
        singleStringDataType: 'Single String Data.',
        doubleStringDataType: "Double String Data.",        //> String
        multilineStringDataType:    `Multi
                                    Line
                                    String Data`,
        numberDataType: 123456789101112,                    //> Number - under 16 numbers
        bigIntDataTypeAppendN: 12345678901234567890123456n, //> Big Int - over 16 numbers - Method 1
        bigIntDataTypeCall:
            BigInt(123456789123456789123456789n),           //> Big Int - over 16 numbers - Method 2
        booleanDataType: false,                             //> Boolean
        undefinedDataType,                                  //> Undefined
        nullDataType: null,                                 //> Null
        symbolDataType: Symbol(),                           //> Symbol - similar to a GUID    
    }; 
//#endregion



//#region Data Conversions
    //* String <> Number Conversions *\\
    {
        let x = "225"
        let y = "Example"

        x.parseInt();       //> Returns 225
        x.parseFloat();     //> Returns 225.00

        Number(x);          //> Returns 255
        Number(y);          //> Returns NaN (Not a Number)

        String(x);          //> Returns 225
        x.toString();       //> Returns 225
    };

    //* Unary + Operator Conversion *\\
    {
    
        let x = "255";
        let y = + x;        //> Returns 255

    };

    //* Date Conversions *\\
    {
        let d = new Date();
        Number(d);          //> Returns 1688395923764
        Date().toString();
    };

    //* Boolean Conversions *\\
    {
        String(false);      //> Returns "false"
        false.toString();   //> Also returns "false"
    };

    //* Automatic Conversions *\\
    {
        5 + null;           //> Returns 5, since null is converted to 0
        "3" + null;         //> Returns "3null", since null is converted to "null"
        "5" + 2;            //> Returns 7
        "5" * "2";          //> Returns 10
    }
//#endregion



//#region Objects and arrays
/*
Note: Constants are advised to be used when creaing objects, in this example, a person.
- Objects are always written as [name: value] pairings.
*/

    const PERSON = {firstName: "John", lastName: "Doe", age: 77, eyeColor: "Green"};

/*    
Note: There are two ways to format an object. The below is another version of formatting an object
*/

    const PERSON1 = {
        firstName: "Jane",          //> This is a property
        lastName: "Doe",
        age: 55,
        eyeColor: "Brown",
        fullName: function() {      //> This is a method

            return this.lastName + ", " + this.lastName;
        }
    };

    //(?) Accessing the properties of an object can be done one of two ways
    PERSON.lastName;
    PERSON["lastName"];
    //> Both return Doe
    
    //* More properties can be added using the format below
    PERSON.nationality = "American";
//#endregion



//#region Conditional Statements
/* 
Note: An if statement will evaluate if something is TRUE, and then run the code. 
- If the condition is false, nothing will run. 
*/
    if (x != y) {
        console.log("These items are not equal to each other");
    };

    //(?) Adding an else statement to your if statement makes it possible to have a false/default path.
    if (x != y) {
        console.log("These two items not equal.");
    }
    else {
        console.log("These two items are equal.");

    };

/*
Note: else if extensions provide the statement with the ability to evaluate against another condition, 
- provided that the first condition is false.
*/

    if (x != y) {
        console.log("These two items not equal.");
    } else if (x == z) {
        console.log("This item is equal to " + z);
    } else {
        console.log("These two items are equal.");
    };

/*
Note: Multiple else statements can be used to evaluate a condition with a switch statement
*/

    switch (PERSON.lastName) {
        case "Doe":
            console.log(
                "This person has the last name Doe. This is the correct person."
            );
            break;

        case "Dane":
            console.log(
                "This person has the last name " + 
                PERSON.lastName + 
                ". This is not the correct person."
            );
            break;

        default:
            console.log(
                "Weird, there's no name for this person."
            );
            break;
    };
//#endregion



//#region Functions
    function newFunction(){
        let y = 36;
        console.log(y);
    };

    /**
     * When a comments is formulated like this, it acts as a tooltip for the function and it's parameters. 
     * @param {String} x the description can tells us what the type as well as the name is 
     * @param {*} y This works for each variable. Though, if the parameter type is ommitted, it's labelled as any
     * @returns This tells us what the funciton is meant to return to the program. Typically, a return will contain a line break above it. 
     */
    function newFunctionWithParameters (x, y) { // (?) Parameters can have the same name as a variable, however, 
                                                // (?)if a global variable already exists, it cannot be set inside of the function
        let b = x+y-z*z1;
        console.log(b); 

        return b;
    }
//#endregion



//#region Scopes
    //Global Scope
    var globalScope;

    function fScope(){
        let functionScope;
        globalScope = 2;            // (?) Global scoped vairables and objects are univerally accessible
        for(;x;){
            let blockScope;
            blockScope = 3;         
            functionScope = 1;      // (?) Within a block scope, it can access variables from within any functions it's a part of 
            globalScope = 2;        // (?) Or from the global variables
        };

        let blockScope = 3          // ! The blockScope cannot be accessed here
    };
    functionScope = 1;              // ! The function scoped variable can't be accessed here, 
                                    // ! and the program will assume you're declaring a new variable
//#endregion



//#region Hoisting
/*
Note: Both of these will execute with the same result
*/

    {
        a = 3
        console.log(a);             //> Returns 3
        var a;
    };

    {
        var a;
        a = 3;
        console.log(a)              //> Returns 3
    };

    // ! This will result in a reference error, a type of logical error 
    exampleName = "Example";
    let exampleName;

    // ! This will result in a syntax error, and will not run
    exampleName2 = "Example";
    const exampleName2;
//#endregion