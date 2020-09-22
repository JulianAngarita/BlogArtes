import React from 'react';
import {Card, Grid, Icon} from 'semantic-ui-react'
import moment from 'moment-timezone';

const TarjetaComentario = ({
    item
}) => {

    return ( 
        <Grid.Column stretched>
        <Card style={{ minHeight: '40vh'}}>
        <Card.Content>
          <Card.Header>{item.asunto}</Card.Header>
          <Card.Meta> {item.nombres} {item.curso} </Card.Meta>
          <Card.Meta>{moment(item.creado).format("DD/MM/YYYY hh:mm a")}</Card.Meta>
          <Card.Content>
              <p>  {item.contenido} </p>
          </Card.Content>
        </Card.Content>
        <Card.Content extra>
            <Icon name="mail"/>
            {item.email}
        </Card.Content>
      </Card>
      </Grid.Column>
    );
}
 
export default TarjetaComentario;