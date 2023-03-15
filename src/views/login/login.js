import { Form } from "antd";
import { Input } from "antd";
import { Checkbox } from "antd";
import { Button } from "antd";
import React from "react"; 
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";
import './login.css'


function App(){
    const [ form ] = Form.useForm()

    const navigate = useNavigate()
    async function loginForm(){
        console.log(form.getFieldValue());
        const res = await request.post("/system/user/manage/login", {
            account: "admin",
            password: 123456,
          });
          if(res){
            navigate('/button')
          }
    }

    const onFinish = async(values) => {
            
      };
    return (    
    <div className="login">
    <div className="content">
    <Form  
        form={ form }
        className="form"
        name="control-hooks"
        onFinish={onFinish}
        labelCol={ { span: 4 } }
        wrapperCol={ { span: 18 } }
    >  
        <h3 className="title">系统登录</h3>
        <Form.Item
            label="用户名"
            name="userName"
            rules={[{ required: true, message: '请输入用户名' }]}
        >
            <Input  />
        </Form.Item>
        <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
        >
            <Input.Password  />
        </Form.Item>
        <Form.Item
            wrapperCol={ { offset:4, span: 18 } }
            name="checked"
            rules={[{ required: true, message: '记住我' }]}
        >
            <Checkbox checked={true}>记住我</Checkbox>
        </Form.Item>
        <Button type="primary" className="login-button" onClick={loginForm}>登录</Button>
    </Form>
</div>
</div>)
}
export default App