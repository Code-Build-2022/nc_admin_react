import { DataGrid} from '@mui/x-data-grid';
import "./datatable.scss"
import {userRows,userColumns} from '../../datasource'
import { Link, useLocation } from "react-router-dom";

const Datatable = () => {
  // let row;
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path)

  if(path==="hotels"){

  }
const actionColumn=[
    {
        field:"action",
        headerName:"Action",
        width:190,
        renderCell:()=>{
            return (
            <div className='cellAction'>
        <div className="viewButton">View</div>
        <div className='deleteButton'>Delete</div>
            </div>
            )
        }
    }
]


  return (
    <div className='datatable'>
       <div className="datatableTitle">
        {path}s
        <Link to={`/${path}/new`} className="link">
          Add New {path}
        </Link>
      </div>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
