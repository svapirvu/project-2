import React from 'react';
import './SideBar.css';

const SideBar = props => {
    const categories = Object.keys(props.categories);
    const subCategories = Object.values(props.categories);
    console.log(subCategories);
    return (
        <div className="sidebar-container">
            {categories.map((category, index) => {
                return (
                    <div key={index}>
                        <button
                        onClick={() => props.showSubCategories(index)}
                        className="category-button"
                        >
                            {category}
                        </button>
                        {props.toggle >= 0 &&
                        props.toggle === index &&
                        subCategories[index].map((subCategory, index2) => {
                            return (
                                <ul className="subcategory-button" key={index2}>
                                    <li>{subCategory}</li>
                                </ul>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default SideBar;