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

const flag = 3;

// 定义函数，根据flag返回模板
function getFlagTemplate(){
  if(flag === 0){
    return <div>flag = 0</div>;
  } else if(flag === 1){
    return <div>flag = 1</div>;
  } else {
    return <div>flag = 3</div>;
  }
}

const clickButton = () => {
  console.log("click");
}

// 事件参数
const clickButton1 = (e) => {
  console.log("click", e);
}

// 传递自定义参数
const clickButton2 = (id) => {
  console.log("click", id++);
}

// 传递事件参数和自定义参数
const clickButton3 = (id, e) => {
  console.log("click", ++id, e);
}

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
      {/* Lesson Day1-07 */}
      {/* 复杂情况渲染 */}
      {getFlagTemplate()}
      {/* Lesson Day1-08 */}
      {/* 事件绑定 */}
      <button onClick={clickButton}>Click</button>
      {/* 获得对象参数 */}
      <button onClick={clickButton1}>Click1</button>
      {/* 传递自定义参数 */}
      <button onClick={() => clickButton2(0)}>Click2</button>
      {/* 传递事件参数和自定义参数 */}
      <button onClick={(e) => clickButton3(0, e)}>Click3</button>
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