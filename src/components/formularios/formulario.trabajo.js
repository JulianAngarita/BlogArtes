import React, { useState } from 'react';
import {Modal, Icon, Form, TextArea, Popup, Button} from 'semantic-ui-react';
import bg from '../../assets/background.jpg'

const FormularioTrabajo = ({
    guardar,
    proyecto,
    modalProyecto,
    setModalProyecto,
    setProyecto
}) => {

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }
    const onChangeProyectoLink = e => {
        setProyecto({
            ...proyecto,
            media: {
                ...proyecto.media,
                [e.target.name]:e.target.value
            }
           
        })
    }
    return ( 
        <Modal
            open={modalProyecto}
        >
            <Modal.Header style={{backgroundImage: `url(${bg})`, color: 'white'}} > <Icon name="clipboard check"/>  Nuevo Proyecto </Modal.Header>
            <Modal.Content>
                <Form>
                    <h3> Datos De la Nota </h3>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="Titulo"
                            name="titulo"
                            value={proyecto.titulo}
                            onChange={onChangeProyecto}
                        />
                        <Form.Input
                            label={
                                <Popup
                                    content="Adjuntar la direccion de enlace de una foto (Tiene que estar en la web)"
                                    trigger={
                                        <label>
                                            <Icon name="info circle"/>
                                            Link de la foto
                                        </label>
                                    }
                                />
                            }
                            value={proyecto.media.linkFoto}
                            name="linkFoto"
                            onChange={onChangeProyectoLink}
                        />
                        <Form.Input
                            label={
                                <Popup
                                    content="Adjuntar la direccion de enlace de un video(Tiene que estar en la web)"
                                    trigger={
                                        <label>
                                            <Icon name="info circle"/>
                                            Link del video
                                        </label>
                                    }
                                />
                            }
                            value={proyecto.media.linkVideo}
                            name="linkVideo"
                            onChange={onChangeProyectoLink}
                        />
                    </Form.Group>
                    <h5>Contenido / Comentarios</h5>
                    <Form.Group widths="equal">
                        <TextArea
                            name="contenido"
                            onChange={onChangeProyecto}
                            value={proyecto.contenido}
                            placeholder="Corta reflexion"
                            label="Contenido"
                        />
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions >
                <Button
                    content="CANCELAR"
                    onClick={() => setModalProyecto(false)}
                    style={{
                        fontWeight: 'bold',
                        color:"black",
                        borderRadius:25,
                    }}
                />
                <Button
                    content="CREAR"
                    onClick={() => guardar()}
                    style={{
                        fontWeight: 'bold',
                        color:"black",
                        borderRadius:25,
                    }}
                />
            </Modal.Actions>
        </Modal>
    );

}
 
export default FormularioTrabajo;