import { useSelector } from 'react-redux';
import Account from './Account';
import './App.css';
import Bonus from './Bonus';
import Admin from './Admin';

function App() {

  const amount = useSelector(state=>state.account.amount)
  const bonus = useSelector(state=>state.points.bonus)
  return (
    <div className="App">
      <h1>Amount :: {amount}</h1>
      <h1>Bonus :: {bonus}</h1>

      <Account/>
      <Bonus/>
      <Admin/>
    </div>
  );
}

export default App;
