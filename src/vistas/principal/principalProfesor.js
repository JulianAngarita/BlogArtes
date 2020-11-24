import React, { Fragment, useState } from 'react';
import NavBarProfesor from '../../components/narbars/navBarProfesor';
import SideBarProfesor from '../../components/narbars/sidebarProfesor';


const PrincipalProfesor = () => {

    const [ sideBar, setSideBar ] = useState(false)

    return (
        <Fragment>
            <NavBarProfesor
                setSideBar={setSideBar}
            />
            <SideBarProfesor
                setSideBar={setSideBar}
                sideBar={sideBar}
            />
        </Fragment>
    );
}

 
export default PrincipalProfesor;