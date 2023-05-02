import { useState } from 'react';
import ColorBtn from '../ColorBtn';
import styles from './index.module.scss';
import {BiCopy} from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

type props = {
    width: number,
    height: string,
    onDelete:()=>void
}

const ColorBox = ({width, height, onDelete}:props)=>{
    const [color, setColor] = useState<string>("#000");

    const copyFn = async()=>{
        try {
            await navigator.clipboard.writeText(color);
            const copiedText:string = await navigator.clipboard.readText();
            console.log(`color '${copiedText}' is copied to the clipboard`)
        } catch (error) {
            console.log("Copying text is failed")
        }
    }

    return (
        <div className={styles.colorBox} style={{width:`${width}vw`}}>
            <div className={styles.top}>
                <AiOutlineClose onClick={onDelete} className={styles.iconBtn} />
                <div className={styles.boxColorLabel}>{color}</div>
                <BiCopy onClick={copyFn} className={styles.iconBtn}/> 
                <ColorBtn color={color} setColor={setColor} />
            </div>
            <div className={styles.bottom} style={{backgroundColor:color, height}}></div>
        </div>
    )
}

export default ColorBox;