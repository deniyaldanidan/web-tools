import { Dispatch, HTMLInputTypeAttribute, SetStateAction, useRef, useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import useClickOutside from '../../hooks/useClickOutside';
import { AnimatePresence, motion } from 'framer-motion';

type props<U> = {
    inpState: any,
    setInpState: (e:string)=>void,
    selectState: U,
    setSelectState: Dispatch<SetStateAction<U>>,
    opts: U[],
    inpType: HTMLInputTypeAttribute
}

export default function JoinedInputSelect<U>({inpState, setInpState, selectState, setSelectState, opts, inpType}:props<U>) {
    const [active, setActive] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(() => {
        setActive(false)
    }, ref)

    return (
        <div className={styles.dblSelectWrapper}>
            <input type={inpType} placeholder='Enter font size' value={inpState ? inpState : ""} onChange={e=>setInpState(e.target.value)} />
            <div className={styles.smallSelect} ref={ref}>
                <div className={styles.selectValue} onClick={() => setActive(prev => !prev)}>
                    <span>{selectState as any}</span>
                    <div className={clsx(styles.arrow, active && styles.active)} />
                </div>
                <AnimatePresence>
                    {active ? (
                        <motion.div
                            className={styles.drpDwn}
                            style={{ x: "-50%" }}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{y:-10, opacity:0}}
                            transition={{duration:0.3, type:"spring"}}
                        >
                            {
                                opts.map((val, i) => <div key={i} onClick={()=>setSelectState(val)}>{val as any}</div>)
                            }
                        </motion.div>
                    ) : ""}
                </AnimatePresence>
            </div>
        </div>
    )
}