import React from "react"
import randomcolor from "randomcolor"

class RandomColor extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: "pink"
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.multi = this.multi.bind(this)

    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                // color: randomcolor()
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1,
                // color: randomcolor()
            }
        })
    }
    multi() {
        this.setState(prevState => {
            return {
                count: prevState.count * 2,
                // color: randomcolor()
            }
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>

                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
                <button onClick={this.multi}>
                    Multiply by two!
                </button>
            </div>
        )
    }
}

export default RandomColor