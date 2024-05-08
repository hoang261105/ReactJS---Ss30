import { Component } from 'react'
interface Slogan {
    name: string,
}

export default class Exercise4 extends Component<{}, Slogan> {
    constructor(prop: Slogan) {
        super(prop)
        this.state = {
            name: "Học code để đi làm"
        }
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    preventState = () => {
        this.setState({
            name: "Học code để đi chơi"
        })
    }
    render() {
        return (
            <div>
                <span>Slogan: {this.state.name}</span><br />
                <button onClick={this.preventState}>Chang State</button>
            </div>
        )
    }
}
