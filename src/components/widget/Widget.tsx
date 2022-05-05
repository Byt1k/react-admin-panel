import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import {FC} from "react";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Widget: FC<{ type: string }> = ({type}) => {
    // let data: {
    //     title: string
    //     isMoney: boolean
    //     link: string
    //     icon: ReactElement
    // };

    let data: any;

    // temporary
    const amount = 1234;
    const diff = 21;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlinedIcon className='icon'
                                          sx={{
                                              color: 'crimson',
                                              backgroundColor: 'rgba(255, 0, 0, 0.2)'
                                          }}
                />
            }
            break
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'See all orders',
                icon: <ShoppingCartOutlinedIcon className='icon'
                                                sx={{
                                                    color: 'goldenrod',
                                                    backgroundColor: 'rgba(218, 165, 32, 0.2)'
                                                }}
                />
            }
            break
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon'
                                                  sx={{
                                                      color: 'green',
                                                      backgroundColor: 'rgba(0, 128, 0, 0.2)'
                                                  }}
                />
            }
            break
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletOutlinedIcon className='icon'
                                                        sx={{
                                                            color: 'purple',
                                                            backgroundColor: 'rgba(128, 0, 128, 0.2)'
                                                        }}
                />
            }
            break
        default:
            break
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}