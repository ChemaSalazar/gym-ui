import { Outlet, Link } from "react-router-dom";
import React from "react";
import 'material-icons/iconfont/material-icons.css';

const Layout = () => {
    return (
        <>
            <nav className={"flex items-stretch space-x-4"}>
                {/*<ul>*/}
                    {/*<li>*/}
                        <Link to="/" className={""}>

                            <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} type={"button"}><span className="material-icons-outlined">space_dashboard</span> Landing</button></Link>
                    {/*</li>*/}
                    {/*<li>*/}

                        <Link to="/Treadmill" className={""}><button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} type={"button"}><span className="material-icons-outlined">run_circle</span> TreadMill</button></Link>
                    {/*</li>*/}
                    {/*<li>*/}
                        <Link to="/IndoorBike" className={""}><button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} type={"button"}><span className="material-icons-outlined">electric_bike</span> Indoor Bike </button></Link>
                    {/*</li>*/}
                    {/*<li>*/}
                        <Link to="/StepMachine" className={""}><button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} type={"button"}><span className="material-icons-outlined">stairs</span> Step Machine </button></Link>
                    {/*</li>*/}
                {/*</ul>*/}
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;