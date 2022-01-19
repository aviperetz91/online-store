import { Routes, Route } from 'react-router-dom';
import { PATHS } from '../constants/stringConstants';
import HomeScreen from '../screens/HomeScreen';

const RouterComponent = () => (
    <Routes>
        <Route path={PATHS.HOME_PATH} exact element={<HomeScreen />}></Route>
    </Routes>
);

export default RouterComponent;
