import React, {Component} from 'react';

class DemoProp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.title.map((item, index) => 
                    <p>{index} - {item.title} - {item.teach}</p>
                )}
            </div>
        )
    }
}

export default DemoProp;