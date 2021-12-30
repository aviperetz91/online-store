import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation/Routes';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
        </BrowserRouter>
    );
};

export default App;
