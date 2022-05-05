import React, {useContext, useEffect} from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {Context} from "../../context/context";
import {actionsContext} from "../../context/reducer";

export const Navbar = () => {
    // @ts-ignore
    const { dispatch, darkMode, fullScreen } = useContext(Context)

    // todo: click escape to exit fullscreen
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                dispatch(actionsContext.setFullScreen(false))
            }
        })
    }, [])

    const toggleFullScreen = () => {
        if (!fullScreen) {
            document.documentElement.requestFullscreen()
                .then(() => {
                    dispatch(actionsContext.setFullScreen(true))
                })
        } else {
            document.exitFullscreen()
            dispatch(actionsContext.setFullScreen(false))
        }
    }

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
                    <div className="item" onClick={() => dispatch(actionsContext.toggleMode())}
                         style={{cursor: 'pointer'}}>
                        {darkMode
                            ? <LightModeOutlinedIcon className='icon'/>
                            : <DarkModeOutlinedIcon className="icon"/>
                        }
                    </div>
                    <div className="item" onClick={toggleFullScreen} style={{cursor: 'pointer'}}>
                        {fullScreen
                            ? <FullscreenExitOutlinedIcon className='icon'/>
                            : <FullscreenIcon className='icon'/>
                        }
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