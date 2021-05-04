import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor() {
        super()

        this.state = {
            number: [],
            display: '',
            operation: ''
        };
    }; 

    handleOperation = (e) => {
        this.setState({
            operation: e.target.value
        });
    };

    handleNumChange = (e) => {
        const { value } = e.target
        this.setState({
            number: [value]
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        
        const { number, operation, display } = this.state;

        let numbers = parseInt(number).filter((num) => {
            return num !== ',' || num !== ' '
        })
        
        for(let num of numbers) {
            if(typeof num !== 'number'){
                this.setState({display: 'Invalid Input'});
            };
        };

        if(operation === 'sum') {
            let sum = numbers.reduce((a, b) => a + b)
            this.setState({display: sum})
        }
    };
        


    render() {
        const { number, display } = this.state;
        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="input" 
                        id="input" 
                        type="text"
                        onChange={this.handleNumChange}
                        value={number}
                    />
                    <select name="selectedOption" id="" onChange={this.handleOperation}>
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
