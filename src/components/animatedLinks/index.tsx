import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";


type props = {
    linkName: string,
    link: string
}

const MotionLink = motion(Link);

const AnimatedLinks = (props: props) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <motion.div style={{ position: "relative" }}>
            <MotionLink
                to={props.link}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{color: "#f1f6f9"}}
                initial={false}
                whileHover={{color: "#FB2576", transition: {duration: 0.25, delay: 0.1}}}
            >
                {props.linkName}
            </MotionLink>
            <AnimatePresence>
                {hover ? (
                    <motion.div
                        style={{ position: "absolute", top: "calc(100% + 3px)", height: "2px", backgroundColor: "#FB2576", content: " ", zIndex: 1, left: "50%", x: "-50%" }}
                        initial={{width: "0%"}}
                        animate={{width: "100%"}}
                        exit={{width: "0%"}}
                    />
                ) : ""}
            </AnimatePresence>
        </motion.div>
    )
}

export default AnimatedLinks;