import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import Routings from './components/shared/routes'
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <div className='main'>
            <Routings />
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
