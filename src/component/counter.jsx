import React, { Component } from 'react'

class Counter extends React.Component {
    state ={
        count: 1,

    }

    }

    render() {
        return(
            <div>
                {this.state.tags.length === 0 && "Please create a new tag !"}
                {this.renderTags()}</div>
            );
        }
    }

    export default Counter;