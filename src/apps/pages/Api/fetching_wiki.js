import React, { Component } from 'react';

var Latex = require('react-latex');

const PATH_BASE = 'http://localhost:5000/wikis/';
const DEFAULT_QUERY = 0;

const largeColumn = {
    width: '40%',
};

const midColumn = {
    width: '30%',
};

const smallColumn = {
    width: '10%',
};

class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wikis: [],
            searchTerm: DEFAULT_QUERY,
        };

        this.setSearchResult = this.setSearchResult.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    onSearch() {
        const { searchTerm } = this.state;
        fetch(`${PATH_BASE}${searchTerm}`)
            .then(response => response.json())
            .then(wikis => this.setSearchResult(wikis[0]))
            .catch(error => error);
    }

    setSearchResult(wikis) {
        this.setState(
            { wikis }
        );
    }

    componentDidMount() {
        const { searchTerm } = this.state;

        fetch(`${PATH_BASE}${searchTerm}`)
            .then(response => response.json())
            .then(wikis => this.setSearchResult(wikis))
            .catch(error => error);
    }

    render() {
        const { searchTerm, wikis, onChange } = this.state;
        if (!wikis) return null;

        return (
            <div className="page">
                <div className="interactions">
                    <form>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={this.onSearchChange}
                        />
                        <Button
                            onClick={() => this.onSearch()}
                            className="button-inline"
                        >
                            Search
                        </Button>
                    </form>
                </div>

                <Show
                    wikis={wikis}
                />
            </div>
        );
    }
}


const Show = ({ wikis }) =>
    <div>
        <Latex displayMode={true}>
            {wikis.content}
        </Latex>
    </div>


const Button = ({
    onClick,
    className = '',
    children,
}) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>

export default Api;