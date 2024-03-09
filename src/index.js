import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux'

//导入定制主题文件
import './theme.css'
import store from './store';
// import sum from '@/test'

// const total = sum(1, 2)
// console.log(total)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>

  </RouterProvider>
  </Provider>
);


