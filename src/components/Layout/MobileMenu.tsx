import { createPortal } from "react-dom";
import styles from './mobile-menu.module.scss';
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import urlList from "./urlList";
import { AnimatePresence, motion } from 'framer-motion';
import {AiOutlineMenu} from 'react-icons/ai';

const CloseIconBTN = motion(AiOutlineClose);

const MobileMenu = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <div
                style={{ fontSize: "1.25rem", lineHeight: "1.3rem", fontWeight: 500 }}
                onClick={() => setActive(true)}
            ><AiOutlineMenu/></div>
            {
                createPortal(
                    (
                        <AnimatePresence>
                            {
                                active ? (
                                    <motion.div
                                        className={styles.mobileMenu}
                                        initial={{ y: "-40vh", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: "100vh", opacity: 0 }}
                                    >
                                        <div
                                            className={styles.mobileDrp}
                                        >
                                            {
                                                urlList.map((val) => <Link to={val.url} key={val.url} onClick={() => setActive(false)}>{val.label}</Link>)
                                            }
                                        </div>
                                        <CloseIconBTN
                                            className={styles.closeBtn}
                                            onClick={() => setActive(false)}
                                        />
                                    </motion.div>
                                )
                                    : ""
                            }
                        </AnimatePresence>
                    ),
                    document.getElementById("portal1") as HTMLElement
                )
            }
        </>
    )
}

export default MobileMenu;