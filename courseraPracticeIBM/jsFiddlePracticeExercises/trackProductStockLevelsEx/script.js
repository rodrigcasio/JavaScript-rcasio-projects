// Exercise 4
// track product stock levels in the inventory

// Array of objects
const products = [
    {product: "Table", stock: 400 },
    {product: "Desk", stock: 200},
    {product: "Lamp", stock: 54},
    {product: "Pillow", stock: 40},
    {product: "Bed", stock: 9},
    {product: "Chair", stock: 0},
];

function checkStockLevels(products) {
    for(let i = 0; i < products.length; i++){
        if(products[i].stock == 0){
            console.log(`\'${products[i].product}\' status: Out of Stock`);
        }else if(products[i].stock >= 0 && products[i].stock < 50){
            console.log(`\'${products[i].product}\' status:  Danger Stock Level`);
        }else if(products[i].stock >= 50 && products[i].stock < 100){
            console.log(`\'${products[i].product}\' status : Re-order Stock Level`);
        }else if(products[i].stock >= 100 && products[i].stock <= 300){
            console.log(`\'${products[i].product}\' status: In Stock`);
        }else{
            console.log(`\'${products[i].product}\' status: Maxium Stock Level`);
        }
    }
}

checkStockLevels(products);


