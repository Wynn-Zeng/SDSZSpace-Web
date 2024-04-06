import { Button, Card, CardBody, Input, Link } from "@nextui-org/react";
import {EyeFilledIcon} from "./assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./assets/EyeSlashFilledIcon";
import React from "react";

function Login() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <div style={{position: "relative", height: "87vh", cursor: "default", userSelect: "none", msUserSelect:"none", MozUserSelect:"none", WebkitUserSelect:"none"}} className="dark:bg-black">
            <Card style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "50px", paddingBottom: "50px", paddingLeft: "30px", paddingRight: "30px", minWidth: "55%"}}>
                <CardBody>
                    <p style={{fontSize: "30px", fontWeight: "bold", textAlign:"center"}}>欢迎登录北京师范大学附属实验中学学生空间！</p>
                    <div style={{paddingLeft: "100px", paddingRight: "100px", paddingTop: "50px", paddingBottom: "50px"}}>
                        <Input isClearable  type="email" label="电子邮件"/><br />
                        <Input
                            label="密码"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                  {isVisible ? (
                                    <EyeSlashFilledIcon className="text-4xl text-default-400 pointer-events-none" />
                                  ) : (
                                    <EyeFilledIcon className="text-4xl text-default-400 pointer-events-none" />
                                  )}
                                </button>
                              }
                            type={isVisible ? "text" : "password"}
                        />
                    </div>
                    <div style={{display: "inline", textAlign:"center", paddingTop: "10px"}}>
                        <Button color="secondary" variant="solid">登录</Button> 或 <Button color="primary" variant="solid" as={Link} href="/register">注册新账号</Button>
                    </div>
                    <div style={{display: "inline", textAlign:"center", paddingTop: "10px", color: "#aaaaaa"}}>
                        （暂未支持第三方登录）
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login;