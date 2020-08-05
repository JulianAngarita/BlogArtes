import React from 'react';
import {Card, Grid, Image, Icon, Form, TextArea} from 'semantic-ui-react'
import moment from 'moment-timezone';

const TarjetaProyecto = ({
    item
}) => {

    return ( 
        <Grid.Column stretched>
        <Card>
        <Image src={item.media.linkFoto} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.titulo}</Card.Header>
          <Card.Meta>{moment(item.creado).format("DD/MM/YYYY hh:mm a")}</Card.Meta>
          <Card.Content>
              <p>  {item.contenido} </p>
          </Card.Content>
        </Card.Content>
        <Card.Content extra>
            {item.media.linkVideo === ''?
            'No hay video adjunto':
            <a
                href={item.media.linkVideo}
                target="_blank"
            >
            <Icon name="record" />
            Video Adjunto
            </a>
            }
        </Card.Content>
      </Card>
      </Grid.Column>
    );
}
 
export default TarjetaProyecto;