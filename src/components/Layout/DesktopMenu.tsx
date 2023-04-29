import AnimatedLinks from "../animatedLinks";
import urlList from "./urlList";



const DesktopMenu = () => {
    return (
        <div
            style={{
                display: "flex",
                columnGap: "40px",
                alignItems: "center",
                fontSize: "1.25rem",
                lineHeight: "1.3rem",
                fontWeight: "500"
            }}
        >
            {
                urlList.map(val => <AnimatedLinks link={val.url} key={val.url} linkName={val.label} />)
            }
        </div>
    )
}

export default DesktopMenu;