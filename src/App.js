import React from 'react';
import Selections from './Selections/Selections';
import Result from './Result'
import Footer from './Footer';
import { Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <p id="macrosMealCreator">Which nutrition method is right for me?</p>
            <div id="appDiv">

                <Switch>
                    <Route exact path='/' component={Selections}/>
                    <Route path='/result'   component={Result}/>
                </Switch>

                <Footer />
            </div>
        </div>
    )
}
export default App;


