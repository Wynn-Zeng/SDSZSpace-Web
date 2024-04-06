import { Button, Card, CardBody, Link } from "@nextui-org/react";

function ErrorPage() {
    return (
        <div style={{position: "relative", height: "87vh", cursor: "default", userSelect: "none", msUserSelect:"none", MozUserSelect:"none", WebkitUserSelect:"none"}}>
            <Card style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", paddingTop: "50px", paddingBottom: "50px", paddingLeft: "20px", paddingRight: "20px", minWidth: "50%"}}>
                <CardBody>
                    <p style={{fontSize: "70px", fontWeight: "bold", textAlign:"center"}}>404</p>
                    <p style={{fontSize: "25px", fontWeight: "bold", textAlign:"center"}}>诶？你怎么来到这里了？这里没有人哦</p>
                    <p style={{fontSize: "15px", fontWeight: "normal", textAlign:"end", color:"#aaaaaa"}}>「该页面不存在或已被删除」</p>
                    <div style={{display: "inline", textAlign:"center", paddingTop: "20px"}}>
                        请选择：<Button color="primary" variant="light" as={Link} href="/">回到首页</Button> 或者 <Button color="secondary" variant="light" onClick={() => window.history.back()}>回到上一页</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ErrorPage;