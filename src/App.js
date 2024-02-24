import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

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

function Button() {
  return <button>Click Button1</button>
}

const Button2 = () => {
  return <button>Click Button2</button>
}

function App() {
  //useState实现一个计数器，点击自增
  //1. 调用useState添加一个状态变量
  //count1 就是状态变量
  //setCount 就是修改状态变量的方法
  const [count1, setCount] = useState(0);

  //2. 点击事件回调
  const handleClick = () => {
    //作用： 1. 修改count1的值 2. 重新使用新的count1渲染UI
    setCount(count1 + 1);
  }

  let [count2, setCount2] = useState(0);

  const handleClick2 = () => {
    //直接修改无法引发视图更新
    // count2++;
    // console.log(count2);
    setCount2(count2++);
  }

  const [form, setForm] = useState({name : "1"})

  const changeForm = () => {
    setForm({
      ...form,
      name : "2"
    })
  }


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
      {/* Lesson Day1-09 */}
      {/* React组件 */}
      <Button></Button>
      <Button2></Button2>
      {/* Lesson Day1-10 */}
      {/* useState函数 */}
      <button onClick={handleClick}>{count1}</button>
      {/* Lesson Day1-11 */}
      {/* useState修改状态规则 */}
      <button onClick={handleClick2}>{count2}</button>
      <button onClick={changeForm}>Change Form Name {form.name}</button>
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