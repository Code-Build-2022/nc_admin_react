import { DataGrid} from '@mui/x-data-grid';
import "./datatable.scss"
import {userRows,userColumns,hotelColumns,hotelRows,trekkingColumns,trekkingRows,adventureColumns,adventureRows} from '../../datasource'
import { Link, useLocation } from "react-router-dom";

const Datatable = () => {
  // let row;
  const location = useLocation();
  const path = location.pathname.split("/")[1];

let rows,columns;

if(path=='hotel'){
  rows=hotelRows;
  columns=hotelColumns;
}else if(path=='user'){
  rows=userRows;
  columns=userColumns;
}
else if(path=='trekking'){
  rows=trekkingRows;  
  columns =trekkingColumns;
}else if(path=='adventure'){
  rows=adventureRows;
  columns=adventureColumns;
}else{
  rows=userRows;
  columns=userColumns;
}


//delete data ny id
function deleteHandler(id){
console.log(id)
}


const actionColumn=[
    {
        field:"action",
        headerName:"Action",
        width:190,
        renderCell:(params)=>{
    
            return (
            <div className='cellAction'>
        
        <Link to={`/${path}/${params.id}`} style={{ textDecoration: 'none' }} >
          <span className="viewButton" >View</span></Link>
        <div className='deleteButton' onClick={()=>deleteHandler(params.id)}>Delete</div>
            </div>
            )
        }
    }
]


  return (
    <div className='datatable'>
       <div className="datatableTitle">
        {path}s
      { ("enquiry"!==path)? (<Link to={`/${path}/new`} className="link">
          Add New {path}
        </Link>):""}
      </div>
       <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}

       
      />
    </div>
  )
}

export default Datatable
