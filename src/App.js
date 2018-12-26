import React from 'react';
import Header from './Header';
import Selections from './Selections/Selections';
import Result from './Result'
import Footer from './Footer';
import { Switch, Route} from 'react-router-dom';



const App = () => {
    return (
        <div id="appDiv">
            <Header />
            <Switch>
                <Route exact path='/' component={Selections}/>
                <Route path='/result'   component={Result}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;


