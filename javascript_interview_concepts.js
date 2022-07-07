#### JavaScript, TypeScript & ES6 ####


#1
	var x = 10;
	function display() {
		console.log(x);
		var x = 20;
	}
	display();
	console.log(x);
	O/P:  undefined, 10

#2
	let x = 10;
	function display() {
		console.log(x);
		let x = 20;
	}
	display();
	console.log(x);

	O/P: error

	Add(3)(5) - 8

#3
	function func1()
	{
	  return {
		  msg: "hello"
	  };
	}

	function func()
	{
	  return
	  {
		  msg: "hello"
	  };
	}

	O/P: hello and undefined

#3
	let i = 1;
	for(i = 0; i<5; i++) {
	  setTimeout(() => {
	    console.log(i);//5,5,5,5,5
	  }, 500);
	}

	O/P: 5(5 times)

#4
	for(let i=0; i<5; i++) {
		setTimeout(() => {
			console.log(i);//0,1,2,3,4
		}, 500);
	}
	O/P: 0,1,2,3,4
	
#5
	(function() {
		console.log(1); 
		setTimeout(function(){console.log(2)}, 1000); 
		setTimeout(function(){console.log(3)}, 0); 
		console.log(4);
	})();
	o/p: 1/4/3/2
	
#6
	console.log(1 +  "2" + "2"); // "122"
	console.log(1 +  +"2" + "2"); // "32"
	console.log(1 +  -"1" + "2"); // "02"
	console.log(+"1" +  "1" + "2"); // "112"
	console.log( "A" - "B" + "2"); // "NaN2"
	console.log( "A" - "B" + 2); // NaN
	console.log(false == '0') // true
	console.log(false === '0') // false

#7 Prototype
	Objects in JavaScript have an internal property known as prototype. It is simply a reference to another object and
	contains common attributes/properties across all instances of the object. An object’s prototype attribute specifies the object from which it inherits properties.
	
	Function.prototype (spl property which refers to another object)
	
	Object.__proto__


#8 ES6 Features
	  Let/Const
	  IIFE to block {}
	  Fat Arrow
	  Default Parameter/ Rest Parameter/ Rest Operator
	  String Interpolation
	  Mudule - export default/{Value}
	  Class and Extends -->> Base class access -> super.toString()
	  Static members and getter setter
	  Promise and Observables
	  Generatorfunction
	  
	  

#9 ES6 Class Snippet
	--- Class Literals ---
     class Person {
	    private _age: number;
	    private _firstName: string;
	    private _lastName: string;
	
	    constructor(firstName, lastName) {
	      this._firstName = firstName;
	       this._lastName = lastName;
	    }
	
	    public get age() {
	        return this._age;
	    }
	
	    public set age(theAge: number) {
	        if (theAge <= 0 || theAge >= 200) {
	            throw new Error('The age is invalid');
	        }
	        this._age = theAge;
	    }
	
	    public getFullName(): string {
	        return `${this._firstName} ${this._lastName}`;
	    }
	}
	
	let Person = new Person('Jatin', 'Nayak');
	console.log(Person.getFullName());
	

#10 Interface
	
	interface IPerson {
		firstName: string;
		lastName: string;
		age: number;
		getFullName(): string;
	}
	
	
	// Object literals
	var customer:IPerson = { 
	   firstName:"Tom",
	   lastName:"Hanks", 
	   sayHi: ():string =>{return "Hi there"} 
	} 
	
	var employee:IPerson = { 
	   firstName:"Jim",
	   lastName:"Blakes", 
	   sayHi: ():string =>{return "Hello!!!"} 
	}
	
	From <https://www.tutorialspoint.com/typescript/typescript_interfaces.htm>
	
	
		
	// Class Implements
	class Person implements IPerson {
		public firstName: string;
		public lastName: string;
		public age: number;
		constructor(firstName: string, lastName: string, age: number) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
		}
		getFullName(): string {
			return `${this.firstName} ${this.lastName}`
		}
	}
	const person: IPerson = new Person('John', 'Doe', 44);
	
	From <https://stackoverflow.com/questions/54356711/when-to-use-class-or-interface-in-angular-project> 
	
	
	
	----- Summary -------		
	interface IPerson {
		firstName: string;
		lastName: string;
		age: number;
	}
	
	const person: IPerson = <IPerson>{
		firstName: 'John',
		lastName: 'Doe',
		age: 44
	};
	
	From <https://stackoverflow.com/questions/54356711/when-to-use-class-or-interface-in-angular-project> 
	

#11 Data Types

	1. Any - Supertype of all data type
	2. Built-in-types - number, string, boolean, void, null, undefined
	3. User-defined - Array, enum, class, interface
	1. immutable

#12 Interface

	interface IEmployee {
		empCode: number;
		empName: string;
		empDept?:string;
		readonly SSN: number;
		getSalary: (number) => number; // arrow function
		getManagerName(number): string; 
	}

#13 ENUM

	enum ChangeDetectionStrategy {
	  OnPush: 0
	  Default: 1
	}

####**** Problems ****####

#01
	Today is a beautiful day. Make it capital case.

#02 Array methods

	forEach, map, filter, reduce, find, findIndex
	concat, push, pop, shift, unshift, slice, splice, delete

#03 Flat the object and log all the string values

	{
		
		key1: 'ABC',
		key2: {
			key1: 'XYZ',
			key2: {
				key1: 'PQR'
			}
		},
		key3: 'MNQ',
		Key4: {
			key1: 'XYZ',
			key2: {
				key1: 'PQR'
			}
		}
		
	}



#04 
	let arr1 = [1, 4, 9, 6];
	let arr1 = [2, 4, 3, 9];
	

#05 Some core JS principles
	#01 - Eventloop
	#02 - Memoryleak
	#03 - Closure
	#04 - Currying
	#05 - Callbackhell
	#06 - Promise and Observable
	#07 - Async and await
	#08 - bind, call, apply
	#09 - What is the difference between ‘==’ and ‘===’?
	#10 - What is the difference between ‘let’ and ‘const’?
	#11 - What is the difference between ‘null’ and ‘undefined’?
	#12 - What is the difference between ‘function declaration’ and ‘function expression’?
			Function declarations are hoisted but function expressions are not hoisted.
	#13 -  What is a Closure and how do you use it?
	#14 - What is “this”?


#06 Deep Copy vs Shallow Copy
	A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.

	From <https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/> 
