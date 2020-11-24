import React, { Fragment, useState } from 'react';
import NavBar from '../../components/narbars/navbar';
import SideBar from '../../components/narbars/sideBarComentarios';


const Principal = () => {

    const [ sideBar, setSideBar ] = useState(false)

    return (
        <Fragment>
            <NavBar
                setSideBar={setSideBar}
            />
            <SideBar
                setSideBar={setSideBar}
                sideBar={sideBar}
            />
        </Fragment>
    );
}

 
export default Principal;