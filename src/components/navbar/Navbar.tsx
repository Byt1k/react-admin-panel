import React, {useContext} from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {DarkModeContext} from "../../context/darkModeContext";
import {actionsDarkMode} from "../../context/darkModeReducer";

export const Navbar = () => {
    // @ts-ignore
    const {dispatch, darkMode} = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className="search">
                    <input type="text" placeholder='Search...'/>
                    <SearchOutlinedIcon className='icon'/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <div className='colorMode' onClick={() => dispatch(actionsDarkMode.toggleMode())}>
                            {darkMode
                                ? <LightModeOutlinedIcon className='icon'/>
                                : <DarkModeOutlinedIcon className="icon"/>
                            }
                        </div>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <img src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg"
                             alt="" className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    )
}