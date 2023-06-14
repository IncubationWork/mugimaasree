let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts =[
    {
        id:1,
        name:'Name product white',
        price:1500,
        quantity:0,
        image:'image/img4.jpg',
        nature:{
            color:'White',
            size:['s','m','l'],
            type:'Shirt'
        }
    },
    {
        id:2,
        name:'Name product grey',
        price:500,
        quantity:20,
        image:'image/img6.jpg',
        nature:{
            color:'Grey',
            size:['s','m','l'],
            type:'Shirt'
        }
    },
    {
        id:3,
        name:'Name product brown',
        price:2000,
        quantity:20,
        image:'image/img5.jpg',
        nature:{
            color:'Brown',
            size:['s','m','l'],
            type:'Polo'
        }
    },
    {
        id:4,
        name:'Name product blue',
        price:2500,
        quantity:20,
        image:'image/img3.jpeg',
        nature:{
            color:'Blue',
            size:['s','m','l'],
            type:'Polo'
        }
    },
    {
        id:5,
        name:'Name product black-white',
        price:3000,
        quantity:20,
        image:'image/img2.jpg',
        nature:{
            color:['Black','White'],
            size:['s','m','l'],
            type:'T-shirt'
        }
    },
    {
        id:6,
        name:'Name product white',
        price:4000,
        quantity:20,
        image:'image/img1.jpg',
        nature:{
            color:'White',
            size:['s','m','l'],
            type:'T-shirt'
        }
    },
    {
        id:7,
        name:'Name product blue',
        price:5000,
        quantity:20,
        image:'image/img7.jpg',
        nature:{
            color:'Blue',
            size:['s','m','l'],
            type:'Shalwar Kameez'
        }
    },
    {
        id:8,
        name:'Name product red',
        price:4500,
        quantity:20,
        image:'image/img9.jpg',
        nature:{
            color:'Red',
            size:['s','m','l'],
            type:'Sleeve'
        }
    },
    {
        id:9,
        name:'Name product brown',
        price:5500,
        quantity:20,
        image:'image/img8.jpg',
        nature:{
            color:'Brown',
            size:['s','m','l'],
            type:'Shalwar Kameez'
        }
    },
    {
        id:10,
        name:'Name product white',
        price:7000,
        quantity:20,
        image:'image/img10.jpg',
        nature:{
            color:'White',
            size:['s','m','l'],
            type:'Dhoti'
        }
    },
    {
        id:11,
        name:'Name product green',
        price:800,
        quantity:20,
        image:'image/img12.jpeg',
        nature:{
            color:'Green',
            size:['s','m','l'],
            type:'Sweater'
        }
    },
    {
        id:12,
        name:'Name product grey',
        price:1000,
        quantity:20,
        image:'image/img11.jpg',
        nature:{
            color:'Grey',
            size:['s','m','l'],
            type:'Dhoti'
        }
    },

];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');


        let newImage = new Image();
        newImage.src = item.image;
        list.appendChild(newItem);
        newItem.appendChild(newImage);

        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString();
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
 });
}
filter.addEventListener('submit',function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item=>{
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
            return false;
            }
        }
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        if(valueFilter.name.value != '')
            {
                if(!item.name.includes(valueFilter.name.value))
                {
                    return false;
                }
            }
            if(valueFilter.minPrice.value != '')
            {
                if(item.price < valueFilter.minPrice.value)
                {
                    return false;
                }
            }
            if(valueFilter.maxPrice.value != '')
            {
                if(item.price > valueFilter.maxPrice.value)
                {
                    return false;
                }
            }
        return true;
    })
    showProduct(productFilter);
});
document.getElementById('clear').addEventListener("click", function() {
   
    filter.value = "";
    //categoryFilter.value = "";

    
});