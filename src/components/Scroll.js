import React from 'react'; 

const Scroll = (props) => {
    return(
        <div style={{ overflowY: 'scroll', height: '90vh', padding: '0 10px' }}>
            {props.children}
        </div>
    ); 
}

export default Scroll;