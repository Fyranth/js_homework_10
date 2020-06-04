//Задание №1
console.log('Задание №1');
function Item(name, price){
    this.name = '';
    this.price = 0;
    if(arguments.length>=1){
        this.name = name;
    }
    if(arguments.length==2){
        this.price= price;
    }
    this.set = function(key,value) {
        this[key] = value;   
    } 
}
let item = new Item();

console.log(item);
item.set('name', 'мышка1');
item.set('price', 350);
let item1 = new Item('мышка');
console.log(item1);
item1.set('price', 600);
let item2 = new Item('мышка', 900);
console.log(item2);

function Basket(){
    let items = [];
    let count = 0;
    let summ = 0;

    this.add = function(item){
        if(!Array.isArray(item)){
            items.push(item);
        } else {
            for(let i=0; i<item.length; i++) {
                items.push(item[i]);    
            }
        }
    };

    this.getSumm = function() {
        let sum=0;
        for(let i =0; i<items.length; i++) {sum+=items[i].price}
        return sum;  
    };

    this.getCount = function() {
        return items.length;
    };

    this.getItems = function() {
        return items;
    }
}

let items_basket = new Basket();
console.log(items_basket);
let items_basket2 = new Basket();
items_basket2.add(item);
console.log(items_basket2);
let items_basket3 = new Basket();
items_basket3.add([item,item1,item2]);
console.log(items_basket3);

console.log(items_basket3.getSumm());
console.log(items_basket3.getCount());
console.log(items_basket3.getItems());


