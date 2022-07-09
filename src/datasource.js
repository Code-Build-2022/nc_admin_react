//temporary data until we connect beckend 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const userRows=[
    { id: 1, username: 'Snow',  age: 35 ,phone:768768,city:"Banglore",bookings:1},
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
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
  ];