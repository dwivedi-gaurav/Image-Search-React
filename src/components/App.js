import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    onSearchSubmit=async (term)=>{
        const response=await Unsplash.get('/search/photos',{
            params:{query:term}
        })
        console.log(response);
    }
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList />
            </div>
        );
    }
}

export default App;