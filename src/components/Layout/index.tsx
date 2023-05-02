import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            minHeight: "100vh"
        }}>
            <Header />
            <main style={{ flexGrow: 1, minHeight: "inherit" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
