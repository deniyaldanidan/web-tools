import { Dispatch, SetStateAction, useRef, useState } from "react";
import styles from './index.module.scss';
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";

type props<T> = {
    list: Array<T>,
    state: T,
    setState: Dispatch<SetStateAction<T>>
}

export default function CustSimpleSelect<T>(props: props<T>) {

    const [active, setActive] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(()=>{
        setActive(false)
    }, ref);
    

    return (
        <div className={styles.custSimSelWrapper} ref={ref}>
            <div className={styles.label} onClick={() => setActive(prev => !prev)} >
                <span>{props.state as any}</span> <div className={clsx(styles.arrowInd, active && styles.active)}></div></div>
            <AnimatePresence>
                {
                    active ? (
                        <motion.div style={{x:"-50%"}} className={styles.drpDwn} initial={{y:-10, opacity:0}} animate={{y:0, opacity: 1}} exit={{y:-10, opacity:0}}>
                            {
                                props.list.map((val, i) => <div key={i} onClick={() => props.setState(val)} className={styles.opt}>{val as any}</div>)
                            }
                        </motion.div>
                    ) : ""}
            </AnimatePresence>
        </div>
    );
}
