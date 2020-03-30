import React from 'react';

class App extends React.Component {
    state = {
        name: 'zhangl',
    };

    componentWillMount() {
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default App;
