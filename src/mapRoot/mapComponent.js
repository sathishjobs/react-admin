import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }
    state = {}
    componentDidMount = () => {
        console.log()
    }
    render() {
        return (
            <h1>Map Placeholder Goes Here</h1>
        );
    }
}

export default Map;