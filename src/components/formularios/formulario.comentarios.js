import React, { useState } from 'react';
import {Modal, Icon, Form, TextArea, Popup, Button} from 'semantic-ui-react';
import bg from '../../assets/background.jpg'

const FormularioComentarios = ({
    guardar,
    comentario,
    setComentario,
    modalComentarios,
    setModalComentarios,
}) => {

    const onChangeComentario = e => {
        setComentario({
            ...comentario,
            [e.target.name]:e.target.value
        })
    }
    return ( 
        <Modal
            open={modalComentarios}
        >
            <Modal.Header style={{backgroundImage: `url(${bg})`, color: 'white'}} > <Icon name="clipboard check"/>  Nuevo Proyecto </Modal.Header>
            <Modal.Content>
                <Form>
                    <h3> Comentario </h3>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="Asunto"
                            name="asunto"
                            value={comentario.asunto}
                            onChange={onChangeComentario}
                        />
                        <Form.Input
                            label={
                                <Popup
                                    content="Para responder tu comentario"
                                    trigger={
                                        <label>
                                            <Icon name="info circle"/>
                                            Correo Electronico
                                        </label>
                                    }
                                />
                            }
                            value={comentario.email}
                            name="email"
                            onChange={onChangeComentario}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="Nombres"
                            name="nombres"
                            value={comentario.nombres}
                            onChange={onChangeComentario}
                        />
                        <Form.Input
                            label="Curso"
                            name="curso"
                            value={comentario.curso}
                            onChange={onChangeComentario}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field>
                        <label>Contenido del Comentario</label>
                        <TextArea
                            name="contenido"
                            value={comentario.contenido}
                            onChange={onChangeComentario}
                        />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions >
                <Button
                    content="CANCELAR"
                    onClick={() => setModalComentarios(false)}
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
 
export default FormularioComentarios;