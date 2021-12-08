import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation/Routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};

export default App;
