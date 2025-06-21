import Login from '../component/Login'
import heading from './heading';
import Afterlogin from './Afterlogin';
function App() {
  let login = false;
  return (
    login ? <Afterlogin /> : <Login />
  )
};
export default App;