import { HexColorPicker } from 'react-colorful';
import styles from './index.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import isValidHexColor from '../../lib/isValidHexColor';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

type props = {
    color: string,
    setColor: Dispatch<SetStateAction<string>>
}

const ColorBtn = ({ color, setColor }: props) => {
    const [active, setActive] = useState<boolean>(false);
    const ref= useRef<HTMLDivElement>(null);

    useClickOutside(()=>{
        setActive(false)
    }, ref)

    return (
        <div className={styles.colorBtnGrp} ref={ref}>
            <div className={styles.color} style={{ backgroundColor: color }} onClick={()=>setActive(prev=>!prev)} />

            <AnimatePresence>
                {active ? (
                    <motion.div className={styles.colorPopup} style={{ x: "-50%", backgroundColor: color }} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                        <div className={styles.colorLabel}>{color}</div>
                        <HexColorPicker color={color} onChange={setColor} style={{ height: 200, width: 200 }} />
                        <input
                            type="text"
                            onChange={e => setColor(
                                prev => isValidHexColor(e.target.value) ? e.target.value : prev
                            )}
                        />
                    </motion.div>
                ) : ""}
            </AnimatePresence>
        </div>
    )
}

export default ColorBtn;