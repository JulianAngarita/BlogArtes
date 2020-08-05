import React, { Fragment } from 'react';
import { Grid, Container, Image, List, Responsive, Icon } from 'semantic-ui-react';

const Footer = () => {

    const styles = {
        linkFooter:{
            color:'#666666', 
            fontWeight:'bold', 
        }
    }  
    return ( 
    <Fragment>
        <Grid columns={2} style={{backgroundColor:"#E4E5E6", marginTop:0, position:'relative'}}>
            <Container>
                <Grid.Column style={{padding:15}}>
                    <Responsive>
                        <List bulleted horizontal>
                        <List.Item style={styles.linkFooter}>
                            <List.Content>
                                    CONTACTOS DE DESARROLLADOR:
                                    <p>
                                    <Icon name="whatsapp" />
                                    (+51)3178104587 - <Icon name="mail"/>angaritaarias632@gmail.com
                                    </p> 
                            </List.Content>
                        </List.Item>
                        <List.Item style={styles.linkFooter}>
                            <List.Content>
                                    CONTACTOS DEL PROFESOR:
                                    <p>
                                        <Icon name="mail"/>ofirduranm@gmail.com
                                    </p> 
                            </List.Content>
                        </List.Item>
                        <List.Item 
                            a='a'
                            href="https://andresistas.wixsite.com/siguetumeta"
                            target="_blank"
                            style={styles.linkFooter}>
                            PAGINA WIX DEL COLEGIO
                            <p>
                                ANDRES BELLO
                            </p>
                        </List.Item>
                        </List>
                    </Responsive>
                    <br></br>
                    <p style={{fontSize:11}}>TODOS LOS DERECHOS RESERVADOS &copy; JULIAN FELIPE ANGARITA ARIAS</p>
                </Grid.Column>
                <Grid.Column>
                    <Responsive {...Responsive.onlyMobile}>
                        <List bulleted>
                            <List.Item as='a' href="https://www.kia.com/co/main.html" style={styles.linkFooter}>KIA.COM.CO</List.Item>
                            <List.Item as='a' href="https://www.kia.com/co/util/privacy.html" style={styles.linkFooter}>POLÍTICA DE PRIVACIDAD</List.Item>
                            <List.Item as='a' href="https://www.kia.com/co/util/sitemap.html" style={styles.linkFooter}>MAPA DEL SITIO</List.Item>
                            
                            <List.Item style={styles.linkFooter}>
                                <List.Content>
                                     CONTACTOS: 
                                     <Icon name="whatsapp" />
                                     3178104587
                                </List.Content>
                            </List.Item>
                        </List>
                    </Responsive>
                </Grid.Column>
            </Container>
        </Grid>
    </Fragment>
    )
}

export default Footer;