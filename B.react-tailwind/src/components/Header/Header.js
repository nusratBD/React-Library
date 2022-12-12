import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'home', route:'/home'},
        {id: 2, name: 'shop', route:'/shop'},
        {id: 3, name: 'contact', route:'/contact'},
        {id: 4, name: 'about', route:'/about'}
    ]
    return (
             
            <nav className='bg-indigo-200 h-32 md:p-12'>
                <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden lg:hidden">
             {open?<XMarkIcon></XMarkIcon> :<Bars3Icon />}
             </div> 
                <ul className={`md:flex justify-center w-full md:static absolute duration-500 ease-in-out ${open?'top-6':'top-[-120px]'}`}>
                    {routes.map(route=><Link key={route.id} route={route}></Link>)}
                </ul>
            </nav>
    
    );
};

export default Header;