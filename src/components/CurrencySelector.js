import React from 'react';
import PropTypes from 'prop-types';

export default class CurrencySelector extends React.Component {

    render () {
        const { currency } = this.context;
        return (
            <div>
                <select defaultValue="gbp">
                    <option value="gbp">Pounds</option>
                    <option value="usd">Dollers</option>
                </select>
            </div>
        );
    }
}