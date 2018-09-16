import React, { Component } from 'react';
import './LFObjects.css';

class LostObjects extends Component {
    
  constructor(props){
    super(props);
        
    this.state = {
      foundObjects : [
        {object_id:1 ,object_name:'Celular',image:'',foundby_first_name:'Sapo',foundby_last_name:'Perez',foundby_login:'Sapo.Perez',date:'09/29/2018',place:'B', description:'No sirve', receivedby:'no'}
      ]
    };
  }
    
  componentDidMount(){
    fetch('/getData')
      .then((res) => {
        return res.json();
      })
    //.then((json) => this.setState({foundObjects:json}))
      .catch((err) => console.log(err));
  }
    
  renderObjects() {
    return this.state.foundObjects.map((obj) => 
      // <Objeto objeto={obj}/>
      <div className="card" key={obj.object_id}>
        <img src="images/object_default.jpg" alt="Avatar"/>
        <div className="container">
          <h4><b>{obj.object_name}</b></h4>
          <p>Object ID: {obj.object_id}</p>
          <p>Received By: {obj.receivedby}</p>
          <p>Found date: {obj.date}</p>
          <p>Place: {obj.place}</p>
          <p>Description: {obj.description}</p>
          <button type="button">Its mine!</button>
        </div>
      </div>
    );
  }
    
  render() {
    return (
      <div className="foundObjects">
        <h1>Found Objects List</h1>
        {
          <div className="grid-container">
            <div className="grid-item">
              {this.renderObjects()}
            </div></div>
        }
      </div>
    );
  }
}
    
export default LostObjects;
    