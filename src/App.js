import React from 'react';
import './SearchBar';
import SearchBar from './SearchBar';
import Content from './Content';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class App extends React.Component {
  state = {images:[], state:false}
  makeApi =  async (text) => {
    const resp = await axios.get('https://api.unsplash.com/search/photos',{
      params:{query:text},
      headers:{
        Authorization : 'Client-ID mMP77el-LAAP7YLTDDHO-LQ2gGBaUQhCtNJMNT-pEdA'
      }
    })
    this.setState({state:true})
    this.setState({images:resp.data.results})
    
  }
  render() {
    return (
      <div className='ui container'>
        <h2 className='row'>Welcome to the Pic App!. Search anything you want!</h2>
        <SearchBar onFormSubmit={this.makeApi} />
        <div className="row">
          <Content images={this.state.images} state={this.state.state}/>
        </div>
      </div>
      
    );
  }
}
export default App;