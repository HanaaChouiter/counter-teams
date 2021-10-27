import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter'
import teams from './teams.json'
import TeamInfo from './components/TeamInfo'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      count: 10,
    }
  }

  handlePlusClick = () => {
    if (this.state.count < 100) {
      this.setState({ count: this.state.count + 1 })
    }
  }

  handleMoinsClick = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }


  render() {
    let team = teams.map(team => (
      <TeamInfo image={team.crestUrl} name={team.shortName} venue={team.venue} address={team.address} email={team.email} phone={team.phone} founded={team.founded} />
    ))
    return (
      <div className="container">
        <h1>Counter</h1>
        <Counter count={this.state.count} substract={this.handleMoinsClick} increment={this.handlePlusClick} />
        <h2 class="text-primary">Teams</h2>
        <div className="row">
          {team}
        </div>
      </div>
    )
  }
}

export default App
