import {Navbar, NavbarContent, NavbarItem, Link, Button, Input} from "@nextui-org/react";
import SDSZIcon from "../assets/SDSZ.png"
import { SearchIcon } from "../assets/SearchIcon";
import { useState } from "react";

export default function NavBar() {
    const [serachBoxLength, setSearchBoxLength] = useState("15")
    function searchBoxNavSetting(searchthings: string) {
        if (searchthings != "") {
            setSearchBoxLength("25")
        } else {
            setSearchBoxLength("15")
        }
    }
    
    return (
        <Navbar style={{cursor: "default", userSelect: "none", msUserSelect:"none", MozUserSelect:"none", WebkitUserSelect:"none"}} maxWidth="full">
            <NavbarContent className="flex-grow-0" justify="start">
                <NavbarItem as={Link} href="/" className="space-x-5 px-5">
                    <div>
                        <img src={SDSZIcon}  width="40px"/>
                    </div>
                    <div>
                        <p className="font-bold text-black dark:text-white">北师大实验中学学生空间</p>
                    </div>
                </NavbarItem>
                <NavbarItem className="px-5">
                    <Link id="ForumLink" color="foreground" href="/" aria-current="page">
                        论坛
                    </Link>
                </NavbarItem>
                <NavbarItem className="px-5">
                    <Link id="ClassSpaceLink" color="foreground" href="/classspace">
                        班级空间
                    </Link>
                </NavbarItem>
                <NavbarItem className="px-5">
                    <Link id="MeLink" color="foreground" href="/">
                        我的
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="space-x-2" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-["+serachBoxLength+"rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="搜索内容"
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                    onValueChange={searchBoxNavSetting}
                />
                <div>
                    <Button as={Link} color="secondary" href="/login" variant="solid">
                        登录
                    </Button>
                </div>
                <div>
                    <Button as={Link} color="primary" href="/register" variant="solid">
                        注册
                    </Button>
                </div>
            </NavbarContent>
        </Navbar>
    );
}
