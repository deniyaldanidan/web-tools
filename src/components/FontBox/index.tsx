import { useState } from 'react';
import styles from './index.module.scss';
import fontData from '../../assets/fontData';
import CustSimpleSelect from '../CustSimpleSelect';
import clsx from 'clsx';
import ColorBtn from '../ColorBtn';
import JoinedInputSelect from '../JoinedInputSelect';
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter, } from 'react-icons/ai';
import { BsJustify } from 'react-icons/bs';

const units = ["px", "rem"] as const;
type unitsType = (typeof units)[number];
type textAlign = "left" | "right" | "center" | "justify";

type FontFamilies = "Sora" | "Hahmlet" | "Epilogue" | "Eczar" | "Lora" | "Raleway" | "Lato" | "Poppins" | "Nunito" | "Prompt";

const FontBox = () => {
    const [text, setText] = useState<string>("Roses are red, Violets are blue");
    const [chosenFontFamily, setChosenFontFamily] = useState<FontFamilies>(Object.keys(fontData)[0] as any);
    const [chosenWeight, setChosenWeight] = useState<number>(500);
    const [italic, setItalic] = useState<boolean>(false);
    const [fontColor, setFontColor] = useState<string>("#ffffff");
    const [bgColor, setBgColor] = useState<string>("#000");
    const [fontSize, setFontSize] = useState<number>(18);
    const [fontUnits, setFontUnits] = useState<unitsType>(units[0]);
    const [fontAlign, setFontAlign] = useState<textAlign>("left");

    return (
        <div className={styles.fontBox}>
            <div className={styles.topRow}>
                <div className={styles.inpGrp}>
                    <div className={styles.label}>Font Family :</div>
                    <CustSimpleSelect<FontFamilies> list={Object.keys(fontData) as any} state={chosenFontFamily} setState={setChosenFontFamily} />
                </div>
                <div className={styles.inpGrp}>
                    <div className={styles.label}>Font Weight: </div>
                    <CustSimpleSelect<number> list={fontData[chosenFontFamily].weights} state={chosenWeight} setState={setChosenWeight} />
                </div>
                {
                    fontData[chosenFontFamily].italic ? (
                        <div className={styles.checkGrp}>
                            <div className={styles.label}>Italic:</div>
                            <div className={clsx(styles.checkBox, italic && styles.checked)} onClick={() => setItalic(prev => !prev)} ></div>
                        </div>
                    ) : ""
                }
                <div className={styles.colorGrp}>
                    <div className={styles.label}>Font Color:</div>
                    <ColorBtn color={fontColor} setColor={setFontColor} />
                </div>
                <div className={styles.colorGrp}>
                    <div className={styles.label}>Background Color: </div>
                    <ColorBtn color={bgColor} setColor={setBgColor} />
                </div>
                <div className={styles.inpGrp}>
                    <div className={styles.label}>Font Size: </div>
                    <JoinedInputSelect<unitsType> inpState={fontSize} setInpState={(val) => { setFontSize(parseFloat(val)) }} selectState={fontUnits} setSelectState={setFontUnits} inpType="number" opts={units as any} />
                </div>
                <div className={styles.alignIcons}>
                    <label>Align: </label>
                    <AiOutlineAlignLeft
                        className={styles.iconBtn}
                        onClick={() => setFontAlign("left")}
                    />
                    <AiOutlineAlignCenter
                        className={styles.iconBtn}
                        onClick={()=>setFontAlign("center")}
                    />
                    <AiOutlineAlignRight
                        className={styles.iconBtn}
                        onClick={()=>setFontAlign("right")}
                    />
                    <BsJustify
                        className={styles.iconBtn}
                        onClick={()=>setFontAlign("justify")}
                    />
                </div>
            </div>
            <div className={styles.midRow}>
                <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <div className={styles.bottomRow} style={
                {
                    backgroundColor: bgColor,
                    color: fontColor,
                    fontFamily: chosenFontFamily,
                    fontWeight: chosenWeight,
                    fontStyle: italic ? "italic" : "normal",
                    fontSize: `${fontSize}${fontUnits}`,
                    textAlign: fontAlign
                }}>{text}</div>
        </div>
    );
}

export default FontBox;