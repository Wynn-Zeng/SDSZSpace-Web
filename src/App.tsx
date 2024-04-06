import { useEffect, useState } from "react";
import ErrorPage from "./404";
import ClassSpace from "./ClassSpace";
import Forum from "./Forum";
import Login from "./Login";
import Register from "./Register";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  var nowDate = new Date()
  const [nowHours, setNowHours] = useState(nowDate.getHours())
  useEffect(() => {
    const t = setInterval(() => {
      setNowHours(nowDate.getHours());
      (nowHours > 21 || nowHours < 10) ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }, 1)

    return () => {
      clearTimeout(t)
    }
  }, [])
  console.log("想要借鉴代码喵？不用翻DevTools了！源码已开源在GitHub：")
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/classspace" element={<ClassSpace />} />
        </Routes>
      </BrowserRouter>
      <footer style={{textAlign: "center", cursor: "default", userSelect: "none", msUserSelect:"none", MozUserSelect:"none", WebkitUserSelect:"none"}} className="dark:bg-slate-950 dark:text-white">
        SDSZ Space. Copyright &copy; 2023-{nowDate.getFullYear()} Wynn Zeng. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App;