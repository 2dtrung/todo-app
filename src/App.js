import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from './actions/counter.js'
function App() {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Current count: {count}</h1>
      <button onClick={() => dispatch(increase(5))}>Add more</button>
      <button onClick={() => dispatch(decrease(5))}>Decrease more</button>
    </div>
  );
}

export default App;
