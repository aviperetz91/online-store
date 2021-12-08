import { Route } from 'react-router-dom';
import { paths } from '../constants';
import Home from '../screens/Home';

const Routes = () => {
    return (
        <>
            <Route path={paths.HOME_PATH} exact component={Home}></Route>
        </>
    );
};

export default Routes;
