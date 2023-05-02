import { useMemo, useState } from 'react';
import styles from './index.module.scss';
import ColorBox from '../../components/ColorBox';
import { IoMdAddCircle } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

const ColorPallete = (): JSX.Element => {
    const [boxes, setBoxes] = useState<string[]>(() => {
        const el1 = nanoid();
        return [el1]
    });

    const isBelow1280: boolean = useMediaQuery({ query: "(max-width:1280px)" });
    const isBelow551:boolean = useMediaQuery({query: "(max-width:551px)"});
    
    const width: number = useMemo(() => {
        if (isBelow551) return 90;
        if (isBelow1280) return 70;

        return boxes.length < 8 ? 100 / (boxes.length + 1) : 100 / boxes.length
    }, [boxes, isBelow1280, isBelow551]);

    const deleteFunc = (boxId:string)=>{
        setBoxes(prev=>prev.filter(bId=>bId!==boxId))
    }

    return (
        <div className={styles.colorPallete} style={{ flexDirection: isBelow1280 ? "column" : "row" }}>
            {
                boxes.map(boxId => <ColorBox key={boxId} width={width} height={isBelow1280?"350px":"700px"} onDelete={()=>deleteFunc(boxId)} />)
            }
            {
                boxes.length < 8 ? <div className={styles.addBtn} style={{ width: `${width}vw`, height: isBelow1280? "300px":"700px" }} onClick={() => setBoxes(prev => boxes.length < 8 ? [...prev, nanoid()] : prev)}><IoMdAddCircle /> Add</div> : ""
            }

        </div>
    )
}

export default ColorPallete;