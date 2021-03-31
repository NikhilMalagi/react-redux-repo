import withDropdown from './withDropdown';
import SmallerDropdown from './Dropdown';
import React from 'react';

const Dropdown = withDropdown(SmallerDropdown);

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: '$',
      price: { min: 0, max: 20 },
      timeOfDay: { all_day: 'All Day' },
    }
  }

  render() {
    const { currency, timeOfDay, price } = this.state;

    return (
      <section>
        <Dropdown
          label="Time"
          value={Object.keys(timeOfDay).map(k => timeOfDay[k])}
          onSelect={this.handleFilterState}
        >
          <button>Time</button>
        </Dropdown>
        <Dropdown
          label="Price"
          value={`${currency}${price.min}-${price.max}`}
        >
         <button>Price</button>
        </Dropdown>
      </section>
    );
  }
}

export default ExampleComponent