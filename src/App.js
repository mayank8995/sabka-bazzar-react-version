import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import Routings from './components/shared/routes'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routings />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
