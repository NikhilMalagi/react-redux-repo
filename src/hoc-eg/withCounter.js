import React,{useState} from 'react';

const withCounter = (Component,props) => {
    
    return (props) => {
        const [counter,updateCounter] = useState(0)

        function updateCount(){
            updateCounter(counter + 1)
        }
        return <Component counter={counter} updateCount={updateCount} />
    }
}

export default withCounter;