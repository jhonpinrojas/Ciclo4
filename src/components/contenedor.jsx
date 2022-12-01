import React, { Component } from 'react';
import instaya from './instaya.png';



class Contenedor extends Component {
    render() {
      return (
        <div className="App">
          {/*Y en la etiqueta img simplemente la mostramos*/}
          <img className='img1' src={instaya} />
        </div>
      );
    }
  }
export default Contenedor