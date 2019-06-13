import React, {Component} from 'react';
import './App.css';
import MOCK from './Mock';
import RecipeDetail from './RecipeDetail'

class App extends Component {

  state = {
    recipes:MOCK
  }

  delete= (id)=>()=>{
    this.setState({recipes:this.state.recipes.filter(item=>item.id !== id)})
  }

  render(){
    return (
  <div className="container">
  <div className="row">
  {this.state.recipes.map(recipe=><div className="col-sm">
    <RecipeDetail recipe={recipe} delete={this.delete}/>
    </div> )}
    
  </div>
</div>
  );
}
}

export default App;
