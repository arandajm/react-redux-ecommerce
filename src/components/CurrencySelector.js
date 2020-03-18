import React from "react";
import PropTypes from "prop-types";

export default class CurrencySelector extends React.Component {
  valueChanged(e) {
    const target = e.nativeEvent.target;
    const newCurrency = target.options[target.selectedIndex].value;
    // Call to setCurrency function in Page component to change currency
    this.props.currencyChanged(newCurrency);
  }

  render() {
    const { currency } = this.props;
    return (
      <div>
        <select defaultValue={currency} onChange={e => this.valueChanged(e)}>
          <option value="gbp">Pounds</option>
          <option value="usd">Dollers</option>
        </select>
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  currency: PropTypes.string,
  currencyChanged: PropTypes.func
};
