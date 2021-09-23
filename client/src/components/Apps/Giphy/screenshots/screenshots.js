import React from 'react'

import screen1 from '../../../../assets/giphy1.png'
import screen2 from '../../../../assets/giphy2.png'
import screen3 from '../../../../assets/giphy3.png'


import './screenshots.css'

const Screenshots = () => {
    return (
        <div className="screenshots-wrapper">
            <img src={screen1} />
            <img src={screen2} />
            <img src={screen3} />
        </div>
    )
}

export default Screenshots
