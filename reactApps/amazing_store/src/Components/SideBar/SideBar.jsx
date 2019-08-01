import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggled: null };
        this.press = this.press.bind(this)

    }

    categoryTitles = Object.keys(this.props.categories)

    press(x) {

        this.setState({ isToggled: this.state.isToggled === x ? null : x });
    }

    render() {
        console.log(this.categoryTitles)
        return (

            <div className="sidebar-container" >
                <p className="all-categ">All categories</p>
                {this.categoryTitles.map((cat, index) =>
                    <div className="current-cat" key={index}>
                        <button className="category-button" onClick={() => this.press(cat)} >{cat}</button>

                        <ul type="none" className="align">

                            {
                                this.state.isToggled === cat && this.props.categories[cat].listItems.map((listItem, index) => {
                                    return (<li key={index} className="decoration">{listItem}</li>);
                                }
                                )}
                        </ul>
                    </div>
                )}
            </div>
        )
    }

}

export default SideBar;