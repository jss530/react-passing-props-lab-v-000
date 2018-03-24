import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter
        filters={props.filter}
        handleChange={props.updateFilterCallback}
        />
        <FilteredFruitList
          currentFilter={props.currentFilter}
          fruit={props.fruit}
          />
      </div>

FruitBasket.defaultProps = {
  fruit: '',
  filters: '',
  currentFilter: '',
  updateFilterCallback: ''
}

export default FruitBasket;
