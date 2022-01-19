import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeaderComponent from './components/HeaderComponent';
import RouterComponent from './components/RouterComponent';
import FooterComponent from './components/FooterComponent';

const App = () => {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return (
        <BrowserRouter>
            <HeaderComponent />
            <RouterComponent />
            <FooterComponent />
        </BrowserRouter>
    );
};

export default App;
