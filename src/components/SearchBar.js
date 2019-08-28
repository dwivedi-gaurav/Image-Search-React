import React from 'react';

class SearchBar extends React.Component{
    state={term:""};

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    onInputChange=(event)=>{
        this.setState({term:event.target.value});
    }
    render(){
        return(
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Search Image</label>
                    <input type="text" onChange={this.onInputChange}/>
                </div>
            </form>
        );
    }
}

export default SearchBar;