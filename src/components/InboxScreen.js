import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from './TaskList';

export function PureInboxScreen({ error }) {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad"></span>
                    <div className="title-message">O нет!</div>
                    <div className="subtitle-message">Что-то пошло не так!</div>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page"><span className="title-wrapper">TaskBox</span></h1>
            </nav>
            <TaskList />
        </div>
    );
}

PureInboxScreen.PropTypes = {
    error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
    error: null,
}

export default connect(({ error }) => ({ error }))(PureInboxScreen);