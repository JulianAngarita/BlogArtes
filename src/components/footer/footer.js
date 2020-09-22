import React, { Fragment } from 'react';
import { Grid, Container, Image, List, Responsive, Icon, Reveal, Header } from 'semantic-ui-react';

const Footer = () => {

    const styles = {
        linkFooter:{
            padding:5,
            color:'#FFFFFF', 
            fontWeight:'bold', 
        }
    }  
    return ( 
    <Fragment>
        <Grid style={{backgroundColor:"#000000", marginTop:0, position:'relative'}}>
            <Container>
                <Header>
                    <Header.Subheader style={{marginTop: 25,fontWeight:'bold', color:'#FFFFFF', textAlign: 'left' }}> Blog Artes </Header.Subheader>
                    <Reveal animated="small fade">
                        <Reveal.Content visible>
                            <Image
                                src={require('../../assets/flowe1.jpg')}
                                style={{
                                    borderRadius: 20,
                                    borderColor: '#000000',
                                    borderStyle: 'solid',
                                    borderWidth: '2px',
                                    marginTop:10,
                                    marginBottom:30
                                }}
                                size="small"
                            />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Image
                                src={require('../../assets/69.jpg')}
                                style={{
                                    borderRadius: 20,
                                    borderColor: '#000000',
                                    borderStyle: 'solid',
                                    borderWidth: '2px',
                                    marginTop:10,
                                    marginBottom:30
                                }}
                                size="small"
                            />
                        </Reveal.Content>
                    </Reveal>
                </Header>
                <Grid.Column style={{paddingBottom:15}}>
                    <Responsive>
                        <Container textAlign="left" fluid style={{marginBottom: 30, marginTop:30}}>
                        <List>
                        <List.Item 
                            a='a'
                            href="https://andresistas.wixsite.com/siguetumeta"
                            target="_blank"
                            style={styles.linkFooter}>
                            Pagina Wix de colegio Andres Bello
                        </List.Item>
                        <List.Item style={styles.linkFooter}>
                            <List.Content>
                                    Contactos del profesor: <Icon name="mail"/> ofirduranm@gmail.com
                            </List.Content>
                        </List.Item>
                        <List.Item style={styles.linkFooter}>
                            <List.Content>
                                    Contactos de desarrollador:
                                    <Icon name="whatsapp" />
                                    (+51) 3178104587 - <Icon name="mail"/>angaritaarias632@gmail.com
                                    
                            </List.Content>
                        </List.Item>
                        </List>
                        </Container>
                    </Responsive>
                </Grid.Column>
            </Container>
        </Grid>
    </Fragment>
    )
}

export default Footer;