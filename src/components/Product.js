import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render () {
        const { title, price } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <img src="/placeholder.jpg" />
                <div>
                    <div>£{price}</div>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    }
}