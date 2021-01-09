import Home from "./Home";
import Orders from "./Orders";
import Navbar from "./Navbar/Index";

import { BrowserRouter, Switch, Route} from "react-router-dom";


function Routes(){
    return(
        <BrowserRouter> 
            <Navbar />       
            <Switch>
                <Route path='/orders'>
                    <Orders />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>

        </BrowserRouter>

    )

}

export default Routes;
