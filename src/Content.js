import React from 'react';

class Content extends React.Component {
    render() {
        if(this.props.images.length === 0 && this.props.state) {
            return <div className='errMsg'>Sorry! No data found or check your spelling.</div>
        }
        return (
            this.props.images.map((image) => {
                return(
                    <div className='col-4'>
                        <img className='img' src={image.urls.regular} key={image.id} alt={image.description}/>
                    </div>
                ); 
            })
        );
    }
}
export default Content;