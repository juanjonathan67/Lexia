import React, { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function Sidebar() {    
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const Menus = [
        { title: "Login", route: '/login', spacing: true},
        { title: "Profile", route: '/', spacing: true, icon: <BsFillPersonFill/> },
        { title: "Levels", route: '/level', spacing: true, icon: <LuLayoutDashboard/>},
        { title: "Settings", route: '/', spacing: true, icon: <IoSettingsOutline/>}
    ];

    return (
    <div className="flex">
        <div className={`bg-darker-purple h-screen p-5 pt-8 
        ${open ? "w-75" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white text-darker-purple 
            text-3xl rounded-full absolute -right-5 top-9 border
            border-darker-purple cursor-pointer ${open && "rotate-180"}`} 
            onClick= {() => setOpen(!open)}/>

            <div className="inline-flex">
                <GiSelfLove className={`bg-darker-purple
                text-5xl rounded cursor-pointer block float-left mr-2
                duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1 className={`text-white origin-left font-medium
                text-5xl duration-300 ${!open && "scale-0"}`} onClick={() => {navigate('/')}}>
                    Lexia
                </h1>
                <h1 className={`absolute bottom-[30%] left-[5%] text-white origin-left 
                font-medium text-4xl duration-300 ${!open && "scale-0"}`}>
                    <span style={{ color: 'white' }}>Get in</span>&nbsp;
                    <span style={{ color: 'pink' }}>Touch</span>
                </h1>
                <h1 className={`absolute bottom-[25%] left-[5%] text-white origin-left 
                font-medium text-4xl duration-300 ${!open && "scale-0"}`}>
                    <span style={{ color: 'white' }}>with the</span>&nbsp;
                    <span style={{ color: 'pink' }}>Creators</span>
                </h1>

            </div>

            <div className={`flex items-center rounded-md bg-light-white
            mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                <BsSearch className={`text-white text-lg block 
                float-left cursor-pointer ${open && "mr-3"}`}/>

                <input type={"search"} placeholder = "Search"
                className={`text-2xl bg-transparent w-full text-white
                focus:outline-none ${!open && "hidden"}`}/>
            </div>

            <ul className='pt-2'>
                {Menus.map((menu, index) => (
                    <>
                    <li key={index} 
                    className={`text-gray-300 flex
                    items-center gap-x-5 cursor-pointer pl-2.5 py-4 hover:bg-highlight-purple
                    rounded-full ${menu.spacing ? "mt-8" : "mt-2"}`}>
                        <span className='text-2xl block float-left'>
                            {menu.icon ? menu.icon : <AiFillDashboard />}
                        </span>
                        <span className={`text-2xl font-medium flex-1
                        duration-300 ${!open && "scale-0"}`} onClick={() => {navigate(menu.route)}}> {menu.title} </span>
                    </li>
                    </>
                ))}
            </ul>
        </div>
        <div/>
    </div>
    );
}

export default Sidebar;