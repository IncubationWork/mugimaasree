let list = document.getElementById('list');
let filter=document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts =[
    {
        id:1,
        name:'Name product white-black',
        price:205600,
        quantity:0,
        image:'pic1.jpg',
        nature:{
             color:['white','black'],
             size:['s','m','l'],
             type:'T-shirt'
        }
    },
    {
        id:2,
        name:'Name product white-black-grey',
        price:300000,
        quantity:30,
        image:'pic2.jpg',
        nature:{
             color:['white','black','grey'],
             size:['s','m','l'],
             type:'polo'
        }
    },
    {
        id:3,
        name:'Name product black',
        price:400000,
        quantity:30,
        image:'pic3.png',
        nature:{
             color:['black'],
             size:['s','m','l'],
             type:'T-shirt'
        }
    },
    {
        id:4,
        name:'Name product blue-black',
        price:400000,
        quantity:30,
        image:'pic5.jpg',
        nature:{
             color:['black','blue'],
             size:['s','m','l'],
             type:'shirt'
        }
    },
    {
        id:5,
        name:'Name product brown',
        price:320000,
        quantity:0,
        image:'pic6.jpeg',
        nature:{
             color:['brown'],
             size:['s','m','l'],
             type:'polo'
        }
    },
    {
        id:6,
        name:'Name product white-black',
        price:100000,
        quantity:0,
        image:'pic7.jpg',
        nature:{
             color:['white','black'],
             size:['s','m','l'],
             type:'T-shirt'
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
    newItem.appendChild(newImage);

    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.name;
    newItem.appendChild(newTitle);

    let newPrice = document.createElement('div');
    newPrice.classList.add('price');
    newPrice.innerText = item.price;
    newItem.appendChild(newPrice);

    list.appendChild(newItem);
});
}
filter.addEventListener('submit',function(event)
{
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item =>
        {
            if(valueFilter.category.value != '')
            {
                if(item.nature.type !=valueFilter.category.value)
                {
                    return false;
                }
            }
            if(valueFilter.color.value &= '')
            {
                if(item.nature.color.includes(valueFilter.color.value))
                {
                    return false;
                }
            }
            if(valueFilter.name.value != '')
            {
                if(item.name.includes(valueFilter.name.value))
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
})
