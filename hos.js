var hospitalmodel={
    hospital_details:[
    {
        established_in:1947,
        name:"Mugi Hospital",
        id:231,
        register_number:23456,
        place:"madhurai",
        founder:"mugi",
        total_number_of_doctor:50,
        
    },
    {
        established_in:1955,
        name:"Kayal Hospital",
        id:321,
        register_number:23454,
        plase:"chennai",
        founder:"kayal",
        total_number_of_doctor:60,
    },
],
department:[ "nephrology","neurology","surgery","urology"],
 staff:["doctor","nurse", "others"],
    doctor:[
       {
            name:"Dr.viji1",
            id:271,
            mobileno:7361215091,
            specialist:"urologist",
            dutytime:2.00-4.00,
            patient_count: 5,
            patient_name:["uma","vinciya"],
            experience:"Twenty years",
            number_of_doctor:2,
        },
        {
            name:"Dr.kayal",
            id:274,
            mobileno:6354782221,
            specialist:"orthopedist",
            dutytime:9.00-11.00,
            experience:15,
            number_of_doctor:2,
        }
    ],
 nurse:
        {
            name:"viji",
            id:371,
            mobileno:6373469677,
            genter:"female",
            adress:"kumarnagar",
        },
    other_staff:[{
        designation:"driver",
        name:"vel",
        id:471,
        mobileno:8696762732,
        gender:"female",
        address:"t-nagar",
    },
    {
        designation:"receptionist",
        name:"uma",
        id:561,
        mobile_no:8798770098,
        genter:"female",
        adress:"chennai",
    }
],
    patient:{
        inpatient:[{
        name:"uma",
        id:27,
        age:20,
        gender:"female",
        disease:"fever",
        roomno:6,
        mobileno:76874839,
        place:"madurai",
        visitortime:11.00-1.00,
       },
    {
        name:"vinciya",
        id:28,
        age:19,
        gender:"female",
        disease:"handpain",
        roomno:4,
        mobileno:7686754577,
        place:"chennai",
        visitortime:5.00-6.00},
        ],

        outpatient: {
            name: "uma",
            id: 38,
            genter: "female",
            age: 21,
            disease:"stomachpain",
            mobileno: 7687483988,
            place: "pavoorchatram",
            doctor_detail(name,id){
                return name;
            }
        },
room:["casulty", "consulting","deliveryroom","emergencyroom" ,"operating room"],
roomdetails:[
    {
        roomtype:"casulty",
        nomberofrooms:2,
        availableroom:1,
        roomno:5,
        incharge:"kayal",
        numberofbed:10,
    },
    {
        roomtype:"emergencyroom",
        nomberofroom:5,
        availaleroom:2,
        roomno:3,
        incharge:"uma",
        numberofbed:8,
 }
],
    ambulence:{
        numberofambulence:5,
        availableambulence:2,
         ambulencedriver:{name:"bala",
          id:432,
          mobilenumber:7789999856,
          place:"tenkasi",
         time:"24 hours",

      }
    },
    medicine:{
        name:"clonidine",
        code:321,
        price:100,
    }
}
}