import React from 'react';

const list = [
    {
        id : 1,
        name : 'Canh',
        age : 20,
        country : 'VN'
    },
    {
        id : 2,
        name : 'Ebam',
        age : 21,
        country : 'US'
    },
    {
        id : 3,
        name : 'Chunk',
        age : 22,
        country : 'SP'
    },
];

class Search extends Comment{
    constructor(props){
        super(props);
        this.state = {
            list,
            searchTerm : '',
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onSearchChange(event){
        this.setState({searchTerm : event.target.value})
    }

    onDismiss(id){
        const isNotId = item => item.id !== id;
        const updateList = this.state.list.filter(isNotId);
        this.setState({list : updateList});
    }

    render(){
        return (
            <div classname = "Search">
                {this.state.list.map(item => 
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.age}</p>
                        <p><button type="button" onClick={() => this.onDismiss(item.id)}>
                            Dismiss</button></p>
                    </div>    
                )}
                <br/>
                <form>
                    <input type="text" onChange={this.onSearchChange}>
                    </input>
                </form>
            </div>
        )
    }
}

export default Search;