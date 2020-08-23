function hello(name) {
   if (!name) {
       name = "world!"
       return `Hello, ${name}`
   }
   else {
    return `Hello, ${name}`
   }
}
console.log(hello())