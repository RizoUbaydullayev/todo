import React from 'react';
import axios from 'axios';
import UserList from './components/User.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': []
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      this.setState({
        'users': response.data
      })
    }).catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <div className='menu'>
          <Menu />
        </div>
        <UserList users={this.state.users} />
        <div className='menu'>
          <Footer />
        </div>
      </div>
    );
  }

}

export default App;
