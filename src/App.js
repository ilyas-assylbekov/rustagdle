import logo from './logo.svg';
import './App.css';
import BodyPanel from './components/BodyPanel';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
          <BodyPanel />
    </Provider>
  );
}

export default App;
