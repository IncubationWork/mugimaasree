var supermarket={supermarket_detail:{
    established_in:2012,
    name:"mugi",
    register_number:24567,
    id:100,
    email:"mugi@gmail.com",
    place:"chennai",
    contect:6382345678,
    founder:"mugimaasree",
},
supermarket_section:["babyproduct","bakery","dairy","fruits","vegetables","frozen food","meat", "groceries","cleaning product"],
workers:["cashier","billing-staff","salese_staff","other-staff"],
workers_detail:{
    cashier:[{
        name: "uma",
        id: 6577,
        gender: "female",
        age:27,
        contact: 6378994421,
        mail: "uma@gmail.com",
        place: "tenkasi",
        experiance: "5years",
        salary: 15000,
        cashier_details(id, contact){
            return id;
        }
        },
       {
        name: "kayal",
        id: 6577,
        gender: "female",
        age:23,
        contect: 6346789923,
         mail: "kayal@gmail.com",
        experiance: "4years",
        place:"covai",
        salary: 15000,
        cashier_details(name,id){
            return id;
        }
    },
],
},
billing_staff:{
    name:"viji",
    gender:"female",
    age:26,
    contect:6789675432,
    mail:"viji@gamail.com",
    experiance:"2years",
    salary:20000,
    place:"chennai",
},
sales_staff:{
    name:"gopi",
    gender:"male",
    age:34,
    place:"viruthunagar",
    contect:6345678892,
    mail:"uma@gmail.com",
    experiance:"3years",
    salary:10000,
    saleser_details(name, id){
        return name;
    }
},
other_staff:[
    {
        name:"suthan",
        id:23,
        gender:"male",
        age:24,
        contect:9987456754,
        mail:"suthan@mail.com",
        designation:"assitant",
        salary:8000,
    },
    {
        name:"suthagar",
        id:34,
        gender:"male",
        age:28,
        contect:9876773321,
        mail:"suthagar@gmail.com",
        designation:"deliveryboy",
        salary:15000,
    }
],
products:["baby_product","bakery","dairy","fruits","vegetables","frozen food","meat", "groceries"],
products_detail:[{
    product_id:126,
    product_name:"fruits",
    product_type:["mango","apple","orange","grapes","gova"],
    mango:{
        experiy_day:"2days",
        quantity:"1kg to 3kg",
        rate:"1kg-77rupees",
    },
},
{
    product_id:134,
    product_name:"baby_product",
    product_type:["soup","oil","shapoo","diaper","feeding bottle"],
    oil:{
        quantity:"500ml to 1000ml",
        rate:"194rupees",
        brand_names:["baby_oil","johnson","pro baby+","himalaya"],
        manufacture_date:14/07/2020,
        experiy_date:07/07/2021,
},
},
],
purchaes_detail:{
    purchaes_id:234,
    bayeer_name:"kovid",
    purchaes_prduct:"vegetables",
    payment:["gpay","paytm","banktransfer"],
    contact:6789090012,
    mail:"kovid@gmail.com",
    place:"madurai",
},
customer_detail:{
    customer_id:234,
    customer_name:"vinciya",
    contact:6374568900,
    customer_type:"rugular_customer",
    mail:"vinciya@gmail.com",
    delivery_type:"home_delivery",
    bank_detail:{
        bank_name:"canarabank",
        account_holder_name:"vinciya",
        account_number:"36560008798",
        branch_name:"mathalamparai",
        ifsc_code:"3656000",
    },
},
stock_detail:{
    stock_id:34,
    stock_product_list:["baby_product","frozen","fruits"],
    stock_total:[
        baby_product={
            name:"soup",
            stock_count:"50box",
        },
            fruits={
                name:"mango",
                stock:"50kg",
            }        
    ],
},
}