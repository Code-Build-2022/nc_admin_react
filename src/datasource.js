//temporary data until we connect beckend 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const userRows=[
    { id: 1, username: 'Suhan',  age: 35 ,phone:768768,city:"Banglore",bookings:1},
    { id: 2, username: 'Lannister', age: 42,phone:768768,city:"Banglore",bookings:1 },
    { id: 3, username: 'Lannister',  age: 45 ,phone:768768,city:"Banglore",bookings:1},
    { id: 4, username: 'Stark', age: 16 ,phone:768768,city:"Banglore",bookings:1},
    { id: 5, username: 'Targaryen',  age: null ,phone:768768,city:"Banglore"},
    { id: 6, username: 'Melisandre', age: 150,phone:768768,city:"Banglore" ,bookings:1},
    { id: 7, username: 'Clifford',  age: 44 ,phone:768768,city:"Banglore",bookings:1},
    { id: 8, username: 'Frances',  age: 36 ,phone:768768,city:"Banglore",bookings:1},
    { id: 9, username: 'Roxie',  age: 65,phone:768768 ,city:"Banglore",bookings:1},
  ];


 export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'User', width: 150,
renderCell:(params)=>{
return (
    <div className='cellWithImg'>
        <AccountCircleIcon/>
        {params.row.username}
    </div>

)
} },
{ field: 'phone', headerName: 'Phone', width: 100 },
{ field: 'city', headerName: 'City', width: 95 },
{ field: 'bookings', headerName: 'No of bookings', width: 110 },
{ field: 'age', headerName: 'Age', width: 70 },
    
 ]

 export const hotelColumns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "name",
      headerName: "Hotel Name",
      width: 130,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "rooms",
      headerName: "No of Rooms",
      width: 100,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
  ];

  export const hotelRows=[
{
  id:1,name:'royal hotel',type:"resort",rooms:2,address:"uppali,chokkamagalur"
},
{
  id:2,name:'GK hotel',type:"premium",rooms:23,address:"bazzzaar,chokkamagalur"
}
  ]
  
// yah se
  export const trekkingColumns=[
    { field: "id", headerName: "ID", width: 55 },

    {
      field: "trekname",
      headerName: "TrekName",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
    },
    {
      field: "available",
      headerName: "Is It Available",
      width: 130,
    },
    {
      field: "description",
      headerName: "Description",
      width: 180,
    },
  ]

  export const trekkingRows=[
    {
      id:1,trekname: "Baba budan giri",price:"5000",address:"Chikmagalur,attigundi",available:"Yes",description:"Baba Budan Giri is a mountain in range of the Western Ghats of India. Located in the Chikmagaluru taluk, Chikmagaluru District of Karnataka"
    },
    {
      id:2,trekname: "Mullaingiri",price:"1000",address:"Chikmagalur",available:"Yes",description:"good"
    },  
    {
      id:3,trekname: "bandeKallu gudda",price:"2000",address:"Chikmagalur",available:"Yes",description:"good"
    },
  {
    id:4,trekname: "Jhari falls",price:"4000",address:"Chikmagalur",available:"Yes",description:"good"
  }, 
  {
    id:5,trekname: "kalhat giri",price:"3000",address:"Chikmagalur",available:"Yes",description:"good"
  }
]

export const adventureColumns =[
  {
    field: "id",
    headerName: "ID",
    width: 55,
  },
  
    {
      field: "adventureName",
      headerName: "Adventure Name",
      width: 180,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
    },
    {
      field: "available",
      headerName: "Is It Available",
      width: 130,
    },
    {
      field: "description",
      headerName: "Description",
      width: 180,
    },  
  
]

export const adventureRows = [
  {
    id:1,adventureName:"muthoddi",price:"4000",address:"Chikmagalur",available:"Yes",description:"good"
  },
  {
    id:2,adventureName:"jungle",price:"5000",address:"india",available:"Yes",description:"Mountain"
  },
  {
    id:3,adventureName:"Forest",price:"6000",address:"karnatak",available:"Yes",description:"good"
  },
  {
    id:4,adventureName:"amazon",price:"7000",address:"world",available:"Yes",description:"good"
  },
  
]