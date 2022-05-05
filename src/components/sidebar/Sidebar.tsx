import React, {useContext} from 'react'
import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import {Link} from "react-router-dom";
import {Context} from "../../context/context";
import {actionsContext} from "../../context/reducer";

export const Sidebar = () => {
    // @ts-ignore
    const {dispatch} = useContext(Context)

    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/'>
                    <span className='logo'>AdminPanel</span>
                </Link>
            </div>
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <Link to='/'>
                        <li>
                            <DashboardOutlinedIcon className='icon'/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className='title'>LISTS</p>
                    <Link to='/users'>
                        <li>
                            <PersonOutlineOutlinedIcon className='icon'/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products'>
                        <li>
                            <Inventory2OutlinedIcon className='icon'/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <InsertChartOutlinedIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <TerminalOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption" onClick={() => dispatch(actionsContext.setLightMode())} />
                <div className="colorOption" onClick={() => dispatch(actionsContext.setDarkMode())} />
            </div>
        </div>
    )
}