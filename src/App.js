import './App.css';
import { createContext, useContext, useState } from 'react'
import './index.css'
import {useRef} from 'react'
import { useEffect } from 'react'

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

function Son4({sendMegToSon5}){
  const msg = "This is son4 message";
  return(
    <button onClick={() => sendMegToSon5(msg)}>Click To Son5</button>
  )
}

function Son5(props){
  return(
    <div>Son5 {props.msg}</div>
  )
}

// APP -> A -> B

const MsgContext = createContext();

function A() {
  return(
    <div>
      This is A component
      <B />
    </div>
  )
}

function B() {
  const msgB = useContext(MsgContext);
  return(
    <div>
      This is B component {msgB}
    </div>
  )
}

const URL1 = 'http://geek.itheima.net/v1_0/channels';

function Son6() {
  //1. 渲染时开启一个定时器
  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("clock execute");
    // }, 10000000000000)
    // return() => {
    //   //清除副作用
    //   clearInterval(timer);
    // }
  }, [])
  return <div>This is Son6</div>
}

  //该布尔切换的逻辑 当前组件耦合在一起 不方便复用
  //自定义Hook解决
  function useToggle() {
    //可复用的逻辑代码
    const [divShow, setDivShow] = useState(true);
    const changeDivStatus = () => setDivShow(!divShow)
    //哪些状态和回调函数需要在其他组件中使用 return
    return {
      divShow,
      changeDivStatus
    }
  }
  // 封装自定义hook的通用思路
  // 1. 声明一个以use打头的函数
  // 2. 在函数体内封装可复用的逻辑（只要是可复用的逻辑）
  // 3. 把组件用到的状态或者回调return出去（以对象或者数组）
  // 4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出状态和回调

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

  const [son4Msg, setSon4Msg] = useState('');
  const sendMsgToSon5 = (msg) => {
    setSon4Msg(msg);
  }

  const appMsg = 'This is app msg'

  const [dataList, setDataList] = useState([])
  useEffect(() => {
    //额外的操作 获取频道列表
    async function getList() {
      const res = await fetch(URL1)
      const list = await res.json()
      setDataList(list.data.channels);
    }
    getList()
  }, [])

  // 1. 没有依赖项 初始渲染时执行+组件更新
  const [count3, setCount3] = useState(0)
  useEffect(() => {
    console.log("副作用函数执行1");
  }) //任何组件的变化都会重新刷新
  // 2. 传入空依赖 初始渲染时执行
  useEffect(() => {
    console.log("副作用函数执行2");
  }, [])
  // 3. 传入特定的依赖项 初始渲染时执行+依赖项变化时执行
  useEffect(() => {
    console.log("副作用函数执行3");
  }, [count3]) //只有count3发生了改变才会改变，高度绑定count3

  const [show, setShow] = useState(true);

  const {divShow, changeDivStatus} = useToggle()

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
      <br></br>
      {/* Lesson Day2-10 */}
      {/* 使用状态提升完成兄弟间通信 */}
      <div>
        Son4
        <Son4 sendMegToSon5 = {sendMsgToSon5}></Son4>
      </div>
      <div>
        <Son5 msg = {son4Msg}></Son5>
      </div>
      <br></br>
      {/* Lesson Day2-11 */}
      {/* 使用content机制跨层级组件通信 */}
      {/* 1. 使用createContext方法创建一个上下文对象Ctx
          2. 在顶层组件（APP）中通过Ctx,Provider组件提供数据
          3. 在底层组件（B）中通过useContext钩子函数获取消费数据 */}
      <div>
        <MsgContext.Provider value={appMsg}>
          This is APP 
          <A />
        </MsgContext.Provider>
      </div>
      {/* Lesson Day2-12 */}
      {/* useEffect的概念理解 */}
          <div>
            <ul>
              {dataList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
          </div>
      {/* Lesson Day2-13 */}
      {/* useEffect的不同依赖项 */}
          <button onClick={() => setCount3(count3 + 1)}>+{count3}</button>
      {/* Lesson Day2-14 */}
      {/* useEffect清除副作用 */}
          <div>
            {show && <Son6 />}
            <button onClick={() => setShow(false)}>Delete Son6</button>
          </div>
      {/* Lesson Day2-15 */}
      {/* 自定义Hook函数 */}
      <div>
        {divShow && <div>This is div</div>}
        <button onClick={changeDivStatus}>toggle</button>
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