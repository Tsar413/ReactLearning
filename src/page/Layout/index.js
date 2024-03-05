import { Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
    const naviagte = useNavigate()
    return (
        <div>
            <button onClick={() => naviagte("/")}>Board</button>
            <br></br>
            <button onClick={() => naviagte("/about")}>About</button>
            <Outlet />
        </div>
    )
}

export default Layout