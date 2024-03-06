import { Outlet, useNavigate } from "react-router-dom";


const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/month")}>Month</button>
            <button onClick={() => navigate("/year")}>Year</button>
            <Outlet />
        </div>
    )
}

export default Layout