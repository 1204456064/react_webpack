import { Form } from "antd";
import { Input } from "antd";
import { Checkbox } from "antd";
import { Button } from "antd";
import React,{ Component } from "react"; 
import './login.css'

const App = ()=> (
    <div className="login">
        <div className="content">
        <Form  
            model="form"
            className="form"
            labelCol={ { span: 4 } }
            wrapperCol={ { span: 18 } }
        >
            <h3 className="title">系统登录</h3>
            <Form.Item
                name="userName"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input  />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password  />
            </Form.Item>
            <Form.Item
                name="checked"
                rules={[{ required: true, message: '记住我' }]}
            >
                <Checkbox checked={true}>记住我</Checkbox>
            </Form.Item>
        </Form>
    </div>
</div>
)


// class LoginCompoent extends Component{
//     render (){
//         return(
//             <div className="login">
//                 <div className="content">
//                     {/* <App> */}
//                 </div>
//             </div>
//         )
//     }
// }

export default App