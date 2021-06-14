import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor() {
        super()

        this.state = {
            numArr: [],
            display: '',
            operation: '',
            input: ''
        };
    }; 

    handleOperation = (e) => {
        this.setState({
            operation: e.target.value
        });
    };

    handleNumChange = (e) => {
        this.setState({ 
            input: e.target.value,
            numArr: [...this.state.numArr, parseInt(e.target.value)]
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const { numArr, input, operation, display } = this.state;

        let numbers = numArr.filter(number => number !== ',')
        
        console.log(numbers)
        for(let num in numbers) {np
            if(typeof num !== 'number'){
                this.setState({display: 'Invalid Input'});
            };
          
            console.log(typeof num)
        };

    };
        
    render() {
        const { input, display } = this.state;
        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="input" 
                        id="input" 
                        type="text"
                        onChange={this.handleNumChange}
                        value={input}
                    />
                    <select 
                        name="selectedOption" 
                        id="" 
                        onChange={this.handleOperation}
                    >
                        <option value="sum">Sum</option>
                        <option value="average">Average</option>
                        <option value="mode">Mode</option>
                    </select>
                    <button type="submit">Calculate</button>
                </form>

                <p id="message">{display}</p>
            </>
        );
    };
};
