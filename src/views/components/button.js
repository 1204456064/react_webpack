import { Button } from "antd";
import React,{ Component } from "react"; 


class ButtonCompoent extends Component{
    render (){
        return(
            <div style={{ padding: "300px" }}>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button>我是按钮组件哦</Button>
            </div>
        )
    }
}

export default ButtonCompoent