import React from 'react'

import screen1 from '../assets/giphy1.png'
import screen2 from '../assets/giphy2.png'
import screen3 from '../assets/giphy3.png'


import '../styles/screenshots.css'

const Screenshots = () => {
    return (
        <div className="screenshots-section">
            <div className="giphy-screenshots-header text-base font-bold px-8 py-2 border-t border-b border-gray-100">
                Screenshots
            </div>
            <div className="screenshots-wrapper py-4 px-8 w-full flex">
                <img src={screen1} />
                <img src={screen2} />
                <img src={screen3} />
            </div>
        </div>
        
    )
}

export default Screenshots
