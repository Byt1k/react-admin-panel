import './chart.scss'
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {FC} from "react";

type ChartPropsType = {
    aspect: number
    title: string
}

export const Chart: FC<ChartPropsType> = ({aspect, title}) => {
    const data = [
        {name: 'January', Total: 1000},
        {name: 'February', Total: 1500},
        {name: 'March', Total: 500},
        {name: 'April', Total: 1100},
        {name: 'May', Total: 700},
        {name: 'June', Total: 1100}
    ];

    return (
        <div className='chart'>
            <div className='title'>{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
