import React from 'react';

class Wrapper extends React.Component{
    state = { counter : 0 }
    incCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    render(){
        return (
            <div>
               {this.props.render(this.state.counter,this.incCounter)}
            </div>
        )
        
    }
}

export default Wrapper;