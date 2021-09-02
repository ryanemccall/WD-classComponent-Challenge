import React, { Component } from 'react';
 
class CatList extends Component {
  constructor(props){
    super(props)
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }
  render(){
    return (
      <div>
        {this.state.breeds.map((breed) => {
          return <Cat passingCat = {breed} />
        })}
      </div>
    )
  }

}

const Cat = (props) => {
  return (
    <div>
      <li>{props.passingCat}</li>
    </div>
  )
}
 
export default CatList;
