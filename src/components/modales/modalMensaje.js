import React from 'react'
import {Modal, Icon, Button} from 'semantic-ui-react'

const ModalMensaje = ({
    setModalMensajeEstatus,
    estatus
}) => {

    console.log('mensaje', estatus)

    const desactivarModal = () => {
        setModalMensajeEstatus({
            activo: false,
            mensaje: ''
        })
    }
    return (  
        <Modal
            size="tiny"
            open={estatus.activo}
        >
            <Modal.Header as="h5"> <Icon name="info circle"/> Información </Modal.Header>
            <Modal.Content>
                <p> {estatus.mensaje} </p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    icon="times"
                    size='small'
                    content="ACEPTAR"
                    style={{backgroundColor:'blue', color:'white', fontWeight: "bold"}}
                    onClick={desactivarModal}
                />
            </Modal.Actions>
        </Modal>
    );

}
 
export default ModalMensaje;