import React from 'react';
import GoatCorral from '../components/GoatCorral/GoatCorral';
// import logo from './logo.svg';
import goatData from '../helpers/data/goatData';
import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
      <button className="btn btn-danger">Bootstrap Button</button>
      <GoatCorral butts={this.state.goats} />
    </div>
    );
  }
}

export default App;
