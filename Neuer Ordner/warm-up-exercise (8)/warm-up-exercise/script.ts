interface Person {
    name: string;
    job: string;
    geschlecht: string;
    alter: number;
    brille: boolean;
    }
    
    let p1: Person = {
    name: "Marc",
    job: "Student",
    geschlecht: "m",
    alter: 19,
    brille: true
    
    };
    
    let p2: Person = {
    name: "Robin",
    job: "Student",
    geschlecht: "m",
    alter: 22,
    brille: false
    
    };
    
    let p3: Person = {
    name: "Ronja",
    job: "Student",
    geschlecht: "w",
    alter: 20,
    brille: false
    
    };
    
    console.log(p1.name, p2.name, p3.name);


    /**
* 
* 1. einer beliebigen Anzahl numerischer Werte
* 
* 2. Ermitteln Sie .... deren Summe
* 
* 
* 3. geben Sie diese in der Konsole aus.
* 
*/

let nums: number[] = [2, 345, 34, 347, 1, 46];

let sum: number = 0;

for (let index: number = 0; index < nums.length; index++) {
????
}

console.log(sum);

et nums: number[] = [2, 345, 34, 347, 1, 46, 42, 63, 346];

let sum: number = 0;

for (let index: number = 0; index < nums.length; index++) {
sum += nums[index];
}

console.log(sum