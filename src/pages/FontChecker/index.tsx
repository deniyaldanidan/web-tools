import { useState } from "react";
import { nanoid } from "nanoid";
import { IoAddCircle } from 'react-icons/io5';
import styles from './index.module.scss';
import { AnimatePresence, motion } from "framer-motion";
import FontBox from "../../components/FontBox";
import { AiOutlineClose } from 'react-icons/ai';
import { useMediaQuery } from "react-responsive";

const FontChecker = () => {
    const [boxes, setBoxes] = useState<Array<string>>([]);

    const handleBoxDelete = (boxId: string) => {
        setBoxes((prev) => prev.filter(box => box !== boxId))
    }

    const isBelow550 = useMediaQuery({query: '(max-width:550px)'});

    return (
        <div className={styles.fontCheckPage}>
            <AnimatePresence>
                {
                    boxes.map((boxId, i) => (
                        <motion.div key={boxId}
                            className={styles.fboxWrapper}
                            initial={{opacity:0, x:-200}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x:200}}
                            transition={{duration:0.5, type:"spring"}}
                        >
                            <div className={styles.fboxIntro}>
                                <span className={styles.fboxLabel}>#{i + 1}</span>
                                <span className={styles.deleteBtn} onClick={() => handleBoxDelete(boxId)}>
                                    Delete #{i + 1}
                                    <AiOutlineClose />
                                </span>
                            </div>
                            <FontBox boxId={boxId} />
                        </motion.div>))
                }
            </AnimatePresence>

            <motion.button className={styles.fontCompAddBTN}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.75, repeat: Infinity, repeatType: 'reverse' } }}
                transition={{ duration: 2.5, type: "spring" }}
                onClick={() => setBoxes(prev => [...prev, nanoid()])}
            >
                <IoAddCircle />
                {
                    isBelow550 ? <span>Add</span> : <span>Add New Block</span>
                }
            </motion.button>
        </div>
    )
}

export default FontChecker;