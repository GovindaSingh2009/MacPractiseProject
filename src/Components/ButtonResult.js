import React from 'react';

function ButtonResult (props) {
    return (
<div> Count :
    <input type='text'  value = {props.result}></input>
</div>
    );
    }
    export default ButtonResult;