import React, { Fragment, useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Container, Button } from 'semantic-ui-react'
import NavBarProfesor from '../../components/narbars/navBarProfesor';
import SideBarProfesor from '../../components/narbars/sidebarProfesor';
import Footer from '../../components/footer/footer';


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