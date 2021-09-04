import React from 'react';
<<<<<<< HEAD

import search from '../../../assets/icon-search.svg';
import settings from '../../../assets/icon-settings.svg';
import avatar from '../../../assets/avatar.png';
import left from '../../../assets/icon-left.svg';
=======
import search from '../icon-search.svg';
import settings from '../icon-settings.svg';
import avatar from '../avatar.png';
import left from '../icon-left.svg';
>>>>>>> ec5b996b661f6971af1c59edd0dfdbeb20abada6

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