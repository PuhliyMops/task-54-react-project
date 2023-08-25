import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      data: [
        {id:1234, name: 'Alvin', phone:'88005553535', career:'IT', email:'lalala@gmail.com', meeting:'20.12 - 12:00'},
        {id:1235, name: 'Mark', phone:'89995553535', career:'Chef', email:'lololo@gmail.com', meeting:'25.12 - 14:00'},
        {id:1236, name: 'Dave', phone:'89115553535', career:'HR', email:'lilili@gmail.com', meeting:''},
        {id:1237, name: 'Daniel', phone:'89515553535', career:'Producer', email:'lululu@gmail.com', meeting:''},
      ]
    }
  }

  onValueChange = (id, value) => {
    this.setState(({data}) => {
      const item = data.find(item => item.id ===id)
      const newItem = {...item, meeting: value}
      const index = data.indexOf(item)
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1 , data.length )]
      return {
        data: newData
      }
    })
}
  render(){
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key ={item.id} onValueChange = {(id, value) => this.onValueChange(id, value)} />
    })

    return (
      <table className="responsive-table">
      <thead>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Career</th>
            <th>Email</th>
            <th>Meeting</th>
        </tr>
      </thead>
      <tbody>
      {personList}
      </tbody>
    </table>
    );
  }

}



export default App;
