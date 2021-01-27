import Navbar from './components/Narbar';
import Home from './components/Home';

function App() {
    const title = 'Welcome to my blog';
    const link = 'https://www.google.com/';

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <h1>{ title }</h1>
                <Home />
            </div>

            <a href={ link }>Google</a>
        </div>
    );
}

export default App;
