import React, { useState } from "react";
import styles from "./CategoriesSection.module.css";
import DownArrow from "../../assets/down-arrow-icon.svg";

const CategoriesSection = ({ categories, categoriesContainer }) => {
  const [dropDownVisible, setdropDownVisible] = useState({
    categoriesDropDown: false,
    staffPicksDropDown: false,
  });

  const handleCategoriesFilter = (e) => {
    const categoryName = e.target.innerHTML;
    const filterCategories = categoriesContainer.filter(
      (category) => category.id === categoryName
    );
    const hideCategories = categoriesContainer.filter(
      (category) => category.id !== categoryName
    );

    filterCategories.map((category) => {
      if (category.hasAttribute("hidden")) category.removeAttribute("hidden");
    });
    hideCategories.map((category) => category.setAttribute("hidden", true));
  };

  const handleCategoriesClick = (e) => {
    setdropDownVisible({
      categoriesDropDown: !dropDownVisible.categoriesDropDown,
      staffPicksDropDown: false,
    });
  };
  const handleStaffPicksClick = (e) => {
    setdropDownVisible({
      categoriesDropDown: false,
      staffPicksDropDown: !dropDownVisible.categoriesDropDown,
    });
  };
  return (
    <div className={styles.all_box}>
      <h3 className={styles.title}>all</h3>
      <div className={styles.categories_box}>
        <div
          className={`${styles.box} cursor-pointer`}
          id={`categoriesDropDown`}
          onClick={handleCategoriesClick}
        >
          <p className='text'>Categories</p>
          <img src={DownArrow} alt='' className={styles.icon} />
          {dropDownVisible.categoriesDropDown && (
            <div className={styles.dropdown}>
              {categories.map((category, id) => {
                return (
                  <div
                    key={id}
                    className={styles.dropdownItem}
                    onClick={handleCategoriesFilter}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          className={`${styles.box} cursor-pointer`}
          onClick={handleStaffPicksClick}
        >
          <p className='text'>Staff Picks</p>
          <img src={DownArrow} alt='' className={styles.icon} />
        </div>
        {/* <div className={styles.box}>
            <p className="text">Tool Collections</p>
            <img src={DownArrow} alt=""  className={styles.icon}/>
          </div> */}
      </div>
    </div>
  );
};

export default CategoriesSection;
