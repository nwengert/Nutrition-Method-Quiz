import React from 'react';
import BodBuds from './images/bodBudsNoB.png';
import veggieWelcome from './images/veggieWelcome.png';

function Header() {
    return (
        <div id="headerDiv">
            <div id="welcomeDiv">
                {/* <div id="byBodBudsDiv"><img src={BodBuds} id="bodyBuddiesImg" alt="bodyBuddies"/></div> */}
                <p id="macrosMealCreator">Which nutrition method is right for me?</p>
                <hr/>
                {/* <HeaderNav /> */}
            </div>
        </div>
    )
}
export default Header