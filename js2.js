let pizzas = [
    {
        id:1,
        nombre: "aceitunas",
        ingredientes: ["aceitunas", "salsa", "queso"],
        precio: 600,

    },

    {
        id:2,
        nombre: "hawaiana",
        ingredientes: ["salsa", "queso", "piña", "jamon"],
        precio: 800,
    },

    {
        id:3,
        nombre: "maiz",
        ingredientes: ["salsa", "queso", "aceituna", "maiz", "bacon"],
        precio: 500,
    },
    {
        id:4,
        nombre: "muzza",
        ingredientes: ["salsa", "queso", "orégano"],
        precio: 450,
    },
    {
        id:5,
        nombre: "bbq",
        ingredientes: ["salsa", "quesos", "bondiola", "bbq", "cebolla"],
        precio: 1200,
    },
    {
        id:6,
        nombre: "cuatro quesos",
        ingredientes: ["mozarela", "gongoncina", "fontina", "parmesano"],
        precio: 800,
    }
]
// 1
 let nombre_pizzas = [] 

 let idPar= pizzas.filter ((pizza) => (pizza.id % 2 ==0));
 //
 idPar.forEach((par) => {
  
 nombre_pizzas.push(par.nombre)

})

console.log (`Las pizzas con id par son ${nombre_pizzas.join(", ")}`) 

//2

 switch (pizzas.some((pizza)=> pizza.precio <= 600)) {

    case true:
        console.log ("Si hay pizzas con precio menor a 600 pesos")
        break;

    case false:
        console.log ("No hay pizzas con precio menor a 600 pesos")    
        break;
}


//3
let tipos_pizza= []

 pizzas.forEach ((pizza) => {
  console.log (`Las pizzas son ${pizza.nombre}`)
})

//4

pizzas.forEach ((pizza) => {
console.log (`los precios de las pizzas son ${pizza.precio}`)
})

//5

pizzas.forEach ((pizza) => {
    console.log (`La pizza ${pizza.nombre} tiene el precio de ${pizza.precio} pesos`)
}) 