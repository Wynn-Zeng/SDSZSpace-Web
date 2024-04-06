import { Card, CardBody } from "@nextui-org/react";
import WriteBox from "./components/WriteBox";

function Forum() {
    return (
        <div className="dark:bg-black dark:text-white h-[87.5vh] space-y-3">
            <div className="flex flex-nowrap justify-center">
                <div style={{textAlign: "center"}} className="space-y-10 max-h-[80vh] overflow-y-auto px-52 py-8 w-[99vw]">
                    <Card>
                        <CardBody className="p-10 space-y-3">
                            <p className="text-3xl font-medium font-serif text-center">给访客的留言</p>
                            <hr />
                            <p>您好！欢迎来到SDSZ Space（北师大实验中学学生空间）！</p>
                            <p>本空间包含论坛，班级空间两个板块，欢迎实验中学及集团校同学使用。</p>
                            <p>空间仍处于开发状态，请耐心等待开发完成！</p>
                            <hr />
                            <p>空间施工中，此界面为UI展示。</p>
                            <p>已实现：论坛页面（当前）UI，<a href="/login" className="text-blue-500">登录页面</a> UI，<a href="/register" className="text-blue-500">注册页面（包含判断）</a> UI及<a href="/404" className="text-blue-500">404页面</a>。</p>
                            <p>暂未实现：论坛后端，账号系统，班级空间。</p>
                            <hr />
                            <p>为加快上线速度，现招开发：</p>
                            <ul>
                                <li>Node/Python/Go（服务器）</li>
                                <li>React（网页版）</li>
                                <li>Kotlin/Java（Android应用）</li>
                                <li>SwiftUI（iOS应用）</li>
                            </ul>
                            <p>请在<b className=" text-xl">保证自己作业写完，复习预习等任务完成</b>的情况下参与开发！！！</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="p-10 space-y-3">
                            <p>This is a Test Card. Hello World! </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div style={{position: "absolute", right: "10px", top: "100px", width: "200px" }}>
                <Card>
                    <CardBody>
                        暂无置顶公告
                    </CardBody>
                </Card>
            </div>
            <WriteBox />
        </div>
    )
}

export default Forum;