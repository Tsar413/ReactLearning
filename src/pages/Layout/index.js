import { getBillList } from "@/store/modules/billStore";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


const Layout = () => {
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(getBillList())
    }, [dispacth])

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/month")}>Month</button>
            <button onClick={() => navigate("/year")}>Year</button>
            <Outlet />
            {/* 测试全局生效样式 */}
            <Button color='primary'>Test</Button>
            <div className="puple">
                <Button color='primary'>Test</Button>
            </div>
        </div>
    )
}

export default Layout