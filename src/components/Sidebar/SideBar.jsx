import React from 'react';
import './SideBar.css';
import { categories } from '../../constants/constants';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='mt-4'>
      {categories.map((category) => (
        <div
          className={`d-flex m-4 category ${selectedCategory === category.name ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <div className='m-2 category-icon'>{category.icon}</div>
          <div className='m-2 category-name'>{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
