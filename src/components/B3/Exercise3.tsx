import { Component } from 'react'
interface Company {
    name: string,
    status: boolean
}

export default class Exercise3 extends Component<{}, Company> {
    constructor(prop: Company) {
        super(prop)
        this.state = {
            name: "Rikkei Academy",
            status: true,
        }
    }

    componentDidMount(): void {
        this.state.status ? this.setState({ name: "RikkeiAcademy" }) : this.setState(({ name: "Rikkeisoft" }))
    }

    changeCompany = () => {
        this.componentDidMount();
        this.setState({
            status: !this.state.status
        })

    }
    render() {
        return (
            <div>
                <span>Company: {this.state.name}</span> <br />
                <button onClick={this.changeCompany}>Change State</button>
            </div>
        )
    }
}
