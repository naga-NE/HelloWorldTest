const greeting:string= "Hello, world"; // 型注釈のスペースがない
function sayHello(name:String ) { // 型の間違いとスペースの問題
console.log(`${greeting}, ${name}!`); // インデントが不正
}


const users = ["Alice", "Bob", "Charlie"]; // 配列の記述方法
users.ForEach(user=> {sayHello(user)}); // 大文字の間違い

sayHello("Dan");