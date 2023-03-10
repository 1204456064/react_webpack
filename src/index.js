import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import LoginCompoent from './views/login/login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import routes from './router/router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <Link to="/button">按钮组件哦</Link>
    <Link to="/table">表格组件哦</Link>

    <br />
    <Routes>
    {
      routes.map((value,key)=>{
        if(value.exact) {
          return <Route exact path={value.path} element={<value.component></value.component>} key={key} />
        }else {
            return <Route path={value.path} element={<value.component></value.component>} key={key} />
        }
      })
    }
    </Routes> */}
    <Routes>
      <Route path='/' element={<LoginCompoent></LoginCompoent>}></Route>
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
