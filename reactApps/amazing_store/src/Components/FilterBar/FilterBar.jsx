import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div>
            <div className="cream-title">
                <h2>Creams & gels</h2>
            </div>
            <div className="morecreams">
                <div className="brand">
                    <p>BRAND:ALL BRANDS</p>
                    <p className="cream-bottom">SKIN TYPE:FOR ALL SKIN TYPES</p>
                    <p className="cream-bottom">AGE:30+</p>
                </div>
                <div className="popularity">
                    <p>SORT BY:BY POPULARITY</p>
                </div>
                <div className="mininav">
                    <div className="leftright">
                        <p className="cream-bar cream-bar-text">Showing 60 of 323</p>
                        <button className="cream-bar cream-bar-button"><i className="fas fa-angle-left"></i></button>
                        <button className="cream-bar cream-bar-button"><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;