import './datatable.scss'
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatableSource";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Datatable = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id: number) => {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn: GridColDef[] = [{
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to={'/users/userId'} style={{textDecoration: 'none'}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to='/users/new' className='link'>Add New</Link>
            </div>
            <DataGrid
                className='dataGrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}
