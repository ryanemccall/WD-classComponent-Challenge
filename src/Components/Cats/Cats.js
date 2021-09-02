import React from 'react';
import CatList from './CatList';
import { Container } from 'reactstrap';
 

const Cats = () => {
   return (
     <Container className="App">
       <br/>
       <h1 className="App-intro">
        CATS
       </h1>
        <CatList /> 
     </Container>
   );

}
 
export default Cats;
