import Header from './src/components/Header';
import Main from './src/components/Main';
import './reset.css';
import './styles.css';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);