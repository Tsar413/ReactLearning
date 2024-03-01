import {useDispatch, useSelector} from "react-redux"
//导入actionCreater
import {inscrement, decrement} from './store/modules/counterStore'

function App() {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
    </div>
  );
}

export default App;
