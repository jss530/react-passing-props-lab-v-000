import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

  updateFilterCallback = event => {
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(currentFilter => this.setState({ filters }));
  }

  fetchFruits = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }

  render() {
    return (
      <FruitBasket
      fruit={this.state.fruit}
      filters={this.state.filters}
      currentFilter={this.state.currentFilter}
      handleChange={this.updateFilterCallback}/>
    )
  }
}

export default App;
