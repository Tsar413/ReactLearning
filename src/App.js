import logo from './logo.svg';
import './App.css';

const count = 100;

function getCount() {
  return count;
}

const list = [
  {id: 1001, name: "Vue"},
  {id: 1002, name: "React"},
  {id: 1003, name: "Angular"}
]

const isLogin = true;

function App() {
  return (
    <div className="App">
      This is a react app.
      {/* Lesson Day1-04 */}
      {/* 使用引号传递字符串 */}
      <br></br>
      {"This is a message."}
      {/* 使用Javascript变量 */}
      <br></br>
      {"Count is " + count}
      {/* 函数调用 */}
      <br></br>
      {getCount()}
      {/* 方法调用 */}
      <br></br>
      {new Date().getDate()}
      {/* 使用Javascript对象 */}
      <br></br>
      <div style={{color: "blue"}}>This is a div</div>
      <br></br>
      {/* Lesson Day1-05 */}
      {/* 渲染列表 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      {/* Lesson Day1-06 */}
      {/* 条件渲染 */}
      {/* 逻辑与 && */}
      {isLogin && <span>Please Login in</span>}
      {/* 三元运算符 */}
      {isLogin ? <span>Username</span> : <span>Please Login in</span>}
    </div>
  );
}

export default App;


  //   <a
  //   className="App-link"
  //   href="https://reactjs.org"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Learn React
  // </a>