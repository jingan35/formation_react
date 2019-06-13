import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
  import {faTrash} from "@fortawesome/free-solid-svg-icons"
class RecipeDetail extends Component{
    render(){
        let {recipe} =this.props;
        return (
          
            <Card>
            <CardImg top width="100%" src={this.props.recipe.picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.recipe.name}</CardTitle>>
              <CardText>{this.props.recipe.description}</CardText>
              <Button onClick={this.props.delete(recipe.id)} ><FontAwesomeIcon icon={faTrash}/></Button>
            </CardBody>
          </Card>
      );
    }
}

export default RecipeDetail;