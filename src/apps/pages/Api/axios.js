import React, { Component } from 'react';
import axios from 'axios';

const PATH_BASE = 'http://localhost:5000/wikis';

class AxiosApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wikis: [],
            error: null,
        }

        this.setResult = this.setResult.bind(this);
    }

    componentDidMount() {
        axios.get(`${PATH_BASE}`)
            .then(response => response.data)
            .then(wikis => this.setResult(wikis))
            .catch(error => this.setState(error))
    }

    setResult(wikis) {
        this.setState({wikis})
    }

    render() {
        const { wikis, error } = this.state;
        return (
            <div>
                {
                    error
                        ? <p>Something went wrong.</p>
                        : <div>
                            <ul>
                                {wikis.map(wiki => <li>{wiki.old_id} - {wiki.content}</li>)}
                            </ul>
                        </div>
                }
            </div>
        )
    }
}

export default AxiosApi;