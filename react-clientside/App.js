import React, { Component } from 'react';
import {FileUploader} from './components/fileUploader.jsx';

export class App extends Component {
  render(){
    return (
      <div>
        <FileUploader />
      </div>
    );
  }
}

export default App;