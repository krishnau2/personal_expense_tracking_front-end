import React from 'react';

class Summary1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {summaryData: []}
    }

    componentDidMount() {
        fetch('/summary.json')
            .then(response => response.json())
            .then(data => this.setState({summaryData: data}))
    }

    renderRows() {
        return this.state.summaryData.map(item => {
            return(
                <tr>
                    <td>{item.account_name}</td>
                    <td>{item.amount}</td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div>
                <h2>Summary Page</h2>
                <table>
                    {this.renderRows()}
                </table>
            </div>
        )
    }
}

export default Summary;