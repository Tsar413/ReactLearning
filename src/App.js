import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import './index.css'
import {useRef} from 'react'

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

//父传子
//1. 父组件传递数据 子组件身上绑定属性
//2. 子组件接收数据 props参数接收
function Son1(props) {
  //props: 是一个对象，包含了父组件中传来的所有数据
  return <div>{props.name}</div>;
}

function Son2(props) {
  return <div>This is son2. {props.children}</div>;
}

function Son3({onGetSon3Msg}) {
  const sonMsg = 'This is son3 message';
  return (
  <div>
    this is son3
    <button onClick={() => onGetSon3Msg(sonMsg)}>sendMsg</button>
  </div>
  )
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

  //受控表单绑定
  //1. 声明一个react状态 - useState
  //2. 核心绑定流程
  //2.1 通过value属性绑定react状态
  //2.2 绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改react状态
  const [value, setValue] = useState('');

  // React中获取DOM
  // 1. 使用useRef创建ref对象，并于JSX绑定
  // 2. 在DOM可用时，通过inputRef.current拿到DOM对象
  // 渲染完毕之后dom生成之后可用
  const inputRef = useRef(null);
  const showDOM = () => {
    console.log(inputRef.current.value);
  }

  const name = "This is app name"

  const getMeg = (msg) => {
    console.log(msg);
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
      {/* Lesson Day1-12 */}
      {/* React基础样式控制 */}
      {/* 通过className控制 */}
      <span className='foo'>This is className foo</span>
      <br></br>
      {/* Lesson Day2-01 */}
      {/* 表单受控绑定 */}
      <input value={value} type='text' onChange={(e) => setValue(e.target.value)}></input>
      {/* Lesson Day2-02 */}
      {/* React中获取DOM */}
      <input type='text' ref={inputRef}></input>
      <button onClick={showDOM}>Show DOM</button>
      {/* Lesson Day2-06 */}
      {/* Lesson Day2-07 */}
      {/* Lesson Day2-08 */}
      {/* 组件通信-父传子 */}
      {/* name为属性名，可以自由定义 */}
      <Son1 name={name}></Son1>
      <Son2>
        <span>this is span.</span>
      </Son2>
      {/* Lesson Day2-09 */}
      {/* 子传父 */}
      <div>
        this is app
        <Son3 onGetSon3Msg = {getMeg} />
      </div>
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