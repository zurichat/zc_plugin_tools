import React, { useState } from 'react'
import styles from "./CategoriesSection.module.css"
import DownArrow from "../../assets/down-arrow-icon.svg"

const CategoriesSection = ({ picks, picksContainer }) => {

  const [dropDownVisible, setdropDownVisible] = useState({
    categoriesDropDown: false,
    staffPicksDropDown: false,
  });


  const handleAllStaffPicksFilter = (e) => {
    const pickName = e.target.innerHTML;
    const filterStaffPicks = picksContainer.filter(
      (pick) => pick.id === pickName
    );
    const hideStaffPicks = picksContainer.filter(
      (pick) => pick.id !== pickName
    );

    filterStaffPicks.map((pick) => {
      if (pick.hasAttribute("hidden")) pick.removeAttribute("hidden");
    });
    hideStaffPicks.map((pick) => pick.setAttribute("hidden", true));
  };


  const handleStaffPicksClick = (e) => {
    setdropDownVisible({
      categoriesDropDown: false,
      staffPicksDropDown: !dropDownVisible.staffPicksDropDown,
    });
  };


  return (
    <div className={styles.all_box}>
      <h3 className={styles.title}>All</h3>
      <div className={styles.categories_box}>
        <div className={styles.box}>
          <p className="text">Categories</p>
          <img src={DownArrow} alt="" className={styles.icon} />
        </div>
        <div
          className={`${styles.box} cursor-pointer`}
          id={`staffPicksDropDown`}
          onClick={handleStaffPicksClick}
        >
          <p className="text">Staff Picks</p>
          <img src={DownArrow} alt='' className={styles.icon} />
          {dropDownVisible.staffPicksDropDown && (
            <div className={styles.dropdown}>
              {picks.map((pick, id) => {
                return (
                  <div
                    key={id}
                    className={styles.dropdownItem}
                    onClick={handleAllStaffPicksFilter}
                  >
                    {pick}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div >
    </div>
  );
}

export default CategoriesSection
