import { Button } from "antd";
import React from "react"; 
import { useNavigate } from "react-router-dom";
import request from "../../utils/request";


function ButtonCompoent(){
    var navigate = useNavigate()

    const layout = async()=>{
        const res = await request.post("/system/user/manage/logout");

          if(res){
            navigate('/')
          }
    }
    return(
        <div style={{ padding: "300px" }}>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Button>我是按钮组件哦</Button>
            <Button type="primary" onClick={layout}>退出登录</Button>
        </div>
    )
}

export default ButtonCompoent