import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            This is login page
            <br></br>
            {/* 声明式的写法 */}
            <Link to="/article">Jump to article page</Link>
            <br></br>
            {/* 命令式的写法 */}
            <button onClick={() => navigate("/article")}>Jump to article page</button>
            <br></br>
            {/* searchParams传参 */}
            <button onClick={() => navigate("/article?id=1&username=test")}>Transfer data</button>
            
        </div>
    ) 
}

export default Login