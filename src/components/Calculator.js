import React, { useState } from 'react';
import './CalculatorCSS.css'

function Calculator() {
    const [value, setValue] = useState('');

    const handleButtonClick = (e) => {
        setValue(value + e.target.value);
    };

    const handleDelete = () => {
        setValue(value.slice(0, -1));
    };

    const handleClear = () => {
        setValue('');
    };

    const handleEvaluate = () => {
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue('Error');
        }
    };

    return (
        <div className='container'>
            <div className='calculator'>
                <form>
                    <div>
                        <input className='textField' type='text' value={value}></input>
                    </div>
                    <div>
                        <input type='button' value='AC' onClick={handleClear} />
                        <input type='button' value='DE' onClick={handleDelete} />
                        <input type='button' value='.' onClick={handleButtonClick} />
                        <input type='button' value='/' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <input type='button' value='7' onClick={handleButtonClick} />
                        <input type='button' value='8' onClick={handleButtonClick} />
                        <input type='button' value='9' onClick={handleButtonClick} />
                        <input type='button' value='*' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <input type='button' value='4' onClick={handleButtonClick} />
                        <input type='button' value='5' onClick={handleButtonClick} />
                        <input type='button' value='6' onClick={handleButtonClick} />
                        <input type='button' value='+' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <input type='button' value='1' onClick={handleButtonClick} />
                        <input type='button' value='2' onClick={handleButtonClick} />
                        <input type='button' value='3' onClick={handleButtonClick} />
                        <input type='button' value='-' onClick={handleButtonClick} />
                    </div>
                    <div>
                        <input type='button' value='00' onClick={handleButtonClick} />
                        <input type='button' value='0' onClick={handleButtonClick} />
                        <input className='equal' type='button' value='=' onClick={handleEvaluate} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Calculator;