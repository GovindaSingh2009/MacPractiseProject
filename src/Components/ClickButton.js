import React,{useState} from 'react';
import ButtonResult from './ButtonResult';

function ClickButton() {
    const initialCount = 0;
    const [tCount,setCount] = useState(initialCount);

    function AddTiger () {
        setCount(tCount + 1);
        console.log(tCount);
    }
    return (
        <div>
            Please click the button to add Tiger counts : 
            <button onClick = {AddTiger}>Tiger Count</button>
            <button onClick = {()=> setCount(initialCount)}>Reset</button>
            <ButtonResult result={tCount} />
        </div>
    );
}
export default ClickButton;