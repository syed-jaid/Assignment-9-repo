import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Nav from '../Navbar/Nav';
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "sells": 104401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "sells": 345300
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "sells": 337010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "sells": 403405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "sells": 509030
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "sells": 830000
        }
    ]
    return (
        <div>
            <Nav></Nav>
            <div className='all-chart-div'>
                <div>
                    <h3 className='chart-title'>Sells In Month</h3>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#aaa8e3" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>

                {/* AreaChart */}
                <div>
                    <h3 className='chart-title'>Investment vs slles</h3>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="sells" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;