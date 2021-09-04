import React from 'react';

import search from '../../../assets/icon-search.svg';
import settings from '../../../assets/icon-settings.svg';
import avatar from '../../../assets/avatar.png';
import left from '../../../assets/icon-left.svg';

const Header = () => {
    return (
        <header>
            <nav>
                <form>
                    <input type="text" placeholder="Gmail" />
                    <img src={search} alt="sreach icon" />
                </form>
                <img className="search" src={settings} alt="search icon" />
                <img className="settings" src={avatar} alt="settings icon" />
            </nav>
            <button>
                <img src={left} alt="sreach icon" /> 
                <p>Back to Tools</p>
            </button>
        </header>
    )
}

export default Header;