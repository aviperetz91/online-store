import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from './navigation/Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

const App = () => {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <ContactUs />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
