import { Provider } from 'react-redux'
import store from './store'
import Dashboard from './pages/Dashboad'

function App() {
  return (
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );
}

export default App;
