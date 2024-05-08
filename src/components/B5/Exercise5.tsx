import { Component } from 'react'
interface App {
    name: string
}

export default class Exercise5 extends Component<{}, App> {
    constructor(prop: App) {
        super(prop)
        this.state = {
            name: "Open the form"
        }
    }

    changeProp = () => {
        this.setState({
            name: "Close the form"
        })
    }
    render() {
        return (
            <div>
                <span>Status: {this.state.name}</span> <br />
                <button onClick={this.changeProp}>Change props</button>
            </div>
        )
    }
}
