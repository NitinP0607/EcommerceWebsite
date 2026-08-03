import React from "react";
import "./Categories.css";
import { collectionsdata } from "../../assets/assets";

const Categories = () => {
  return (
    <div className="categories">
      {collectionsdata.map((collection) => (
        <div key={collection.id} className="collection-section">
          <div className="collection-header">
            <h2>{collection.title}</h2>
            <p>{collection.description}</p>
          </div>

          <div className="category-grid">
            {collection.categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />
                </div>

                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.productCount}+ Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;