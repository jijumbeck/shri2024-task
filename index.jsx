import Header from './components/Header';
import Main from './components/Main';
import './reset.css';
import './styles.css';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);