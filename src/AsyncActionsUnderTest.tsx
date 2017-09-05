import * as React from 'react';
import { connect } from 'react-redux';
import { State, TestingActionCreators } from './store';

interface Props {
    counter: number;
}

class AsyncActionsUnderTest extends React.Component<Props, {}> {
    render() {
        return (
        <div>
            <button>sync action that takes 3 seconds</button>
            <button>correctly awaited async actions that takes 3 seconds</button>
            <button>correctly awaited async actions that throws exception after 3 seconds</button>
            <button>non-awaited async actions that throws exception after 3 seconds</button>
            <button>exception thrown after 3 seconds</button>
        </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps, TestingActionCreators)(AsyncActionsUnderTest);