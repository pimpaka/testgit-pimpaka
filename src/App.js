import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';
// import monstersdata from './mockdata'
// console.log(monstersdata)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount () {
//TODO: 
//     fetch()
// .then((response) => {
//     if (response.status === 200) { // Or what ever you want to check
//         return Promise.resolve(response.json()); // This will end up in SUCCESS part
//     }
//     return Promise.resolve(response.json()).then((responseInJson) => { // This will end up in ERROR part
//         return Promise.reject(responseInJson.message); //  responseInJson.message = "Some nasty error message!"
//     });
// })
// .then((result) => { // SUCCESS part
//     console.log("Success: ", result); // Response from api in json
// }, (error) => { // ERROR part
//     // Because we rejected responseInJson.message, error will contain message from api. In this case "Some nasty error message!"
//     console.log("Error: ", error); 
// })
// .catch(catchError => {
//     console.log("Catch: ", catchError);
// })
// .finally(() => { ...});


    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin':'https://pimpaka.github.io/'
      }
    })
    .then(response => response.json())
    .then(user => this.setState({ monsters: user }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        hello
        <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
        <SearchBox 
          placeholder='search monster' 
          handlechange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App;
