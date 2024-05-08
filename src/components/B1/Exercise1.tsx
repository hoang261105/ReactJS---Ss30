import { Component } from 'react'
interface User {
    name: string,
}

export default class Exercise1 extends Component<{}, User> {
    constructor(prop: User) {
        super(prop)
        this.state = {
            name: "Hoàng"
        }
    }
    componentWillMount(): void {
        this.setState({
            name: "Huy Hoàng"
        })
    }
    render() {
        return (
            <div>Họ và tên: {this.state.name}</div>
        )
    }
}
