import React from 'react';

class SearchBar extends React.Component {
    state = {text:''}

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.text);
    }
    render() {
        return (
            <form className='ui form' onSubmit={this.onSubmit}>
                <div className="ui fluid icon input">
                    <input type="text" placeholder="Search here!." value={this.state.text} onChange={e => this.setState({text:e.target.value})} />
                    <i className="search icon"></i>
                </div>
            </form>
        );
    }
}
export default SearchBar;