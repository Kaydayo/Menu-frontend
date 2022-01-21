import React from 'react';

const Category = ({ category, filterItems }) => {
    return <button className="selet-category" onClick={()=>filterItems(category)}>{category}</button>;
};

export default Category;
