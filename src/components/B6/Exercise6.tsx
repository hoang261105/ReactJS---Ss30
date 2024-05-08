import { Component } from 'react'
interface App {
    name: string
}

interface Props {

}
export default class Exercise6 extends Component<{}, App> {
    constructor(prop: Props) {
        super(prop)
        this.state = {
            name: "Interface Rendering"
        }
    }
    shouldComponentUpdate(): boolean {
        return false
    }
    changeProp = () => {
        this.setState({
            name: "Interface Rendering 2"
        })
    }
    render() {
        return (
            <div>
                <span>Message: {this.state.name}</span> <br />
                <button onClick={this.changeProp}>Change prop</button>
            </div>
        )
    }
}
