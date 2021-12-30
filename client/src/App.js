import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from './navigation/Routes';
import Header from './components/Header';

const App = () => {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();
    return (
        <BrowserRouter>
            <Header />
            <Routes />
        </BrowserRouter>
    );
};

export default App;
