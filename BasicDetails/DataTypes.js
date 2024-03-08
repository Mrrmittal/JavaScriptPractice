/*
Que: Define DataTypes in JavaScript.
Sol: JavaScript is a dynamically typed (also called loosely typed) scripting language. In JavaScript,
     variables can receive different data types over time. The latest ECMAScript standard defines eight 
     data types Out of which seven data types are Primitive(predefined) and one complex or Non-Primitive.

    1.) Primitive Data Type:
        a.) Number - for int, float, double.
        b.) String - for text and sentences.
        c.) null - for store null object.
        d.) undefined - when variable is not intialized.
        e.) boolean - for true and false.
        f.) BigInt 
        g.) Symbol   

    2.) Non Primitive Data Type:
        a.) Objects : Like arrays and function.    
     */

        let a; // undefined
        let b = null; //Object 
        let c = 12.23; //number
        let d = "Name"; // string
        let isName = true; // Boolean
        
        console.log(typeof(a));
        console.log(typeof(b));
        console.log(typeof(c));
        console.log(typeof(d));
        console.log(typeof(isName));
