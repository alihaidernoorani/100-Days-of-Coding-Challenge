// Multiple named exports can exist in a module

export default function addNumbers (a: number,b: number){
    return a + b;
}

export function subtractNumbers (a: number,b: number){
    return a - b;
}

export function multiplyNumbers (a: number,b: number){
    return a * b;
}