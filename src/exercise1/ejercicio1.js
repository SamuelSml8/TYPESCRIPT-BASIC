// 1. Definir una interfaz para representar un producto:
// a. La interfaz debe incluir propiedades para el nombre, el precio y la categoría
// del producto.
// b. Crear una clase que implemente la interfaz de producto.
// c. Instanciar un objeto de producto y asignarle valores a sus propiedades.
var phone = /** @class */ (function () {
    function phone(name, price, category) {
        this.Name = name;
        this.Price = price;
        this.Category = category;
    }
    return phone;
}());
var celular = new phone("Samsumg", 100, "Android");
console.log("Name: " + celular.Name);
console.log("Price: " + celular.Price);
console.log("Category: " + celular.Category);
