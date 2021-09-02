import React, { Component } from 'react';
import {Form, Input, Button} from 'reactstrap';

 
class SearchIndex extends Component {
  constructor(){
    super()

    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let thing = this.thing;
    console.log(thing);
  }
  searchFunction() {
    let valueToFind = this.thing ;
    if (this.state.things.includes(valueToFind)){
      return valueToFind;
    }
    
  }
 
  render() {
      return(
      <div>
        <Form onSubmit={() => this.searchFunction()}>
        <Input type='text' ref={(e) => this.thing = e} name='thing'placeholder='Search Here'  />
        <Button>Submit</Button>
        </Form>
        <h3>Results:{this.valueToFind}</h3>
      </div>
      )}
 }

 

 
export default SearchIndex;
