import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
    render () {
        return (
            <div className="page">
                <Header />
                <div className="layout">
                    <SideBar />
                    <MainContent />
                </div>
            </div>
        );
    }
}