import React, { Fragment, useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Container, Button } from 'semantic-ui-react'
import NavBar from '../../components/narbars/navbar';
import SideBar from '../../components/narbars/sidebar';
import Footer from '../../components/footer/footer';


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
            {/* <Footer/> */}
        </Fragment>
    );
}

 
export default Principal;