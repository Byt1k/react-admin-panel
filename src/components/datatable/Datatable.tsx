import './datatable.scss'
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource";

export const Datatable = () => {
    const actionColumn: GridColDef[] = [{
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: params => {
            return (
                <div className='cellAction'>
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}
