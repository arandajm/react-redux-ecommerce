import React from 'react';
import PropTypes from 'prop-types';

export default class Basket extends React.Component {
    render () {
        const { items, total } = this.props;
        return (
            <div>
                {items} items | £{total}
            </div>
        );
    }
}