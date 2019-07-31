import React from 'react';
import SideBar from '../SideBar/SideBar';
import SideAd from '../SideAd/SideAd';
import FilterBar from '../FilterBar/FilterBar';

class MainContent extends React.Component{
    constructor (props){
        super();
        this.state={
            categories: {
                    FACE: ['CREAMS & GELS','PATCHES', 'EMULSIONS','TONERS','FACE CLEANSING','MAKEUP REMOVAL', 'SCRUBS','PEELING','MASKS'],
                    BODY: [],
                    FOOT:[],
                    HANDS:[],
                    HAIR:[],
                    MAKEUP:[]
                }
            }
        }

    render(){
        return(
            <>
                <div>MainContent</div>
                <SideBar 
                categories={this.state.categories} 
                disabled={false}
                hidden={false}
                title={"All Categories"} />
              {/*   <SideAd/> */}
               {/*  <FilterBar/> */}
            </>  
        )
    }
}

export default MainContent;