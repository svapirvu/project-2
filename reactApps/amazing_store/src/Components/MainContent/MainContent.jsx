import React from 'react'
import SideBar from '../SideBar/SideBar'
import SideAd from '../SideAd/SideAd';
// import './Main.css'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled: false,
            categories: {
                FACE: {id: 1,
                    listItems:[
                    "Creams & Gels",
                    "Patches",
                    "Emulstions",
                    "Tonners",
                    "Face Cleansing",
                    "Make-up Removal",
                    "Scrubs",
                    "Peeling",
                    "Masks"
                ]},
                BODY: {id:2,listItems:["Creams", "Gel Shower"]},
                FOOT: {id:3, listItems:["Cream"]},
                HANDS: {id:4, listItems:["Cream","Balsam"]},
                HAIR: {id:5, listItems:["Shampoo","Balsam","Conditioner"]},
                MAKEUP: {id:6, listItems:["Mascara","Eyeliner"]}
            }
        }
    }


    render(){
        return(
            <div className="content">
                <SideBar categories={this.state.categories} />
                <SideAd/>
               
            </div>
            
        )
    }

}

export default Main