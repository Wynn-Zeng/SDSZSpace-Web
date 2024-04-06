import { Button, Card, CardBody, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure, Link } from "@nextui-org/react";
import {EyeFilledIcon} from "./assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./assets/EyeSlashFilledIcon";
import React from "react";
/*import axios from 'axios';
import CryptoJS from 'crypto-js';

function encryptData(data: string): string {
    return CryptoJS.SHA256(data).toString();
}
*/

async function modifyUserInfoOnServer() {
    /*
    try {
        
        const encryptedPassword = encryptData(password);
        const encryptedRealname = encryptData(realname);

        const response = await axios.post('http://154.9.28.247/modifyUserInfo', {
            username: username,
            email: email,
            usertype: usertype,
            realname: encryptedRealname,
            password: encryptedPassword
        });
        console.log('用户信息已成功修改！');
    } catch (error) {
        console.error('修改用户信息时出错：', error);
    }
    */
    location.href = "/"
}

function Register() {
    const [isVisible, setIsVisible] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [userName, setUserName] = React.useState("");
    const [realName, setRealName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [userType, setUserType] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [invalidNow, setInvalidNow] = React.useState(false);
    const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isEmailInvalid = React.useMemo(() => {
        if (email === "") return false;

        return validateEmail(email) ? false : true;
    }, [email]);

    const handleUserTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setUserType(e.target.value);
    };

    const validateUserName = (userName: string) => userName.match(/^[a-zA-Z][a-zA-Z0-9-]*$/) && userName.length >= 5 && userName.length <= 20
    const isUserNameInvalid = React.useMemo(() => {
        if (userName === "") return false;

        return validateUserName(userName) ? false : true;
    }, [userName]);

    const validateRealName = (realName: string) => realName.match(/^[\u4e00-\u9fa5]+$/) && realName.length >= 2 && realName.length <= 15
    const isRealNameInvalid = React.useMemo(() => {
        if (realName === "") return false;

        return validateRealName(realName) ? false : true;
    }, [realName]);

    const validatePassword = (password: string) => password.length >= 8
    const isPasswordInvalid = React.useMemo(() => {
        if (password === "") return false;

        return validatePassword(password) ? false : true;
    }, [password]);

    function checkinfo() {
        if (!((!isEmailInvalid && email != "") && (!isUserNameInvalid && userName != "") && (!isPasswordInvalid && password != "") && (!isRealNameInvalid && realName != "") && userType != "")) {
            console.log(isEmailInvalid, isUserNameInvalid, userType, isPasswordInvalid, isRealNameInvalid)
            setInvalidNow(false)
        } else {
            setInvalidNow(true)
        }
        onOpen();
    }

    return (
        <div style={{position: "relative", height: "87vh", cursor: "default", userSelect: "none", msUserSelect:"none", MozUserSelect:"none", WebkitUserSelect:"none"}} className="dark:bg-black dark:text-white">
            <Card style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "50px", paddingBottom: "50px", paddingLeft: "30px", paddingRight: "30px", minWidth: "55%", maxHeight: "95%"}}>
                <CardBody>
                    <p style={{fontSize: "30px", fontWeight: "bold", textAlign:"center"}}>欢迎注册北京师范大学附属实验中学学生空间！</p>
                    <div style={{paddingLeft: "100px", paddingRight: "100px", paddingTop: "50px", paddingBottom: "50px"}}>
                        <Input isRequired isClearable type="username" label="用户名" value={userName} onValueChange={setUserName} isInvalid={isUserNameInvalid} color={isUserNameInvalid ? "danger" : "success"} errorMessage={isUserNameInvalid && "用户名仅为英文字母/数字，且需大于5个字符或小于20个字符"}/><br />
                        <Input isRequired isClearable type="realname" label="真实姓名（核实身份）" value={realName} onValueChange={setRealName} isInvalid={isRealNameInvalid} color={isRealNameInvalid ? "danger" : "success"} errorMessage={isRealNameInvalid && "请填写您的真实姓名（仅支持中文）！"}/><br />
                        <Select isRequired label="您与实验的关系是？" description="请如实填写，若信息不符将自动注销账号并封禁您的IP！" selectedKeys={[userType]} onChange={handleUserTypeChange}>
                            <SelectItem key="student" value="student" className="dark:bg-black dark:text-white">学生</SelectItem>
                            <SelectItem key="teacher" value="teacher" className="dark:bg-black dark:text-white">教职员工</SelectItem>
                            <SelectItem key="graduate" value="graduate" className="dark:bg-black dark:text-white">毕业生</SelectItem>
                            <SelectItem key="outsiders" value="outsiders" className="dark:bg-black dark:text-white">外来人士</SelectItem>
                        </Select><br />
                        <br /><Input isRequired isClearable type="email" label="电子邮件" value={email} onValueChange={setEmail} isInvalid={isEmailInvalid} color={isEmailInvalid ? "danger" : "success"} errorMessage={isEmailInvalid && "请填写正确的邮箱地址"}/><br />
                        <Input
                            isRequired
                            label="密码"
                            value={password}
                            onValueChange={setPassword}
                            isInvalid={isPasswordInvalid}
                            color={isPasswordInvalid ? "danger" : "success"}
                            errorMessage={isPasswordInvalid && "密码应大于8位"}
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
                        <Button color="primary" variant="solid" onPress={() => checkinfo()}>注册</Button> 或 <Button color="secondary" variant="solid" as={Link} href="/login">已有账号？</Button>
                    </div>
                    <div style={{display: "inline", textAlign:"center", paddingTop: "10px", color: "#aaaaaa"}}>
                        （暂未支持第三方登录）
                    </div>
                </CardBody>
            </Card>
            <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 dark:text-white">{invalidNow ? "空间使用须知" : "信息填写不完整"}</ModalHeader>
                    <ModalBody className="dark:text-white">
                        {invalidNow ? <><p style={{color: "#ff0000", fontWeight: "900"}}>请认真阅读本须知，不遵循本须知产生的任何后果由您自己承担！</p>
                        <p>本空间供热爱实验的学生，老师们及毕业生日常交流，为了保证空间的正常运行，我们决定禁止以下内容：</p>
                        <p>1.违法犯罪、政治、色情及与宗教信仰等相关内容。</p>
                        <p>2.破坏空间环境，例如：广告引流、恶意/重复刷烂梗、倒垃圾、宣泄负面情绪、辱骂引战造谣以及发送引起不适的图片、视频或聊天记录等行为。</p>
                        <p>3.其他任何有可能导致本空间被举报的任何内容</p>
                        <p>同时，本空间承诺不泄漏您的个人信息（真实姓名及密码均使用单向加密算法进行了加密）</p>
                        <p>本须知的内容可能会在未经事先通知的情况下更改，Wynn Zeng拥有本须知的最终解释权。</p>
                        <p>希望大家携手共建一个和谐的学生空间！</p></> : <p>您的信息填写不完整或有误，请检查后重新提交</p>}
                    </ModalBody>
                    <ModalFooter>
                        {invalidNow ? <><Button color="danger" variant="flat" onPress={onClose} disabled>我不同意该须知</Button>
                        <Button color="primary" onPress={() => modifyUserInfoOnServer()}>我同意该须知</Button></> : <Button color="danger" variant="solid" onPress={onClose}>好的</Button>}
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Register;