import { Routes, Route } from 'react-router-dom';
import { PATHS } from '../config/consts';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';

const RouterComponent = () => (
    <Routes>
        <Route path={PATHS.HOME_SCREEN_PATH} exact element={<HomeScreen />}></Route>
        <Route path={PATHS.SHOP_SCREEN_PATH} exact element={<ShopScreen />}></Route>
    </Routes>
);

export default RouterComponent;
