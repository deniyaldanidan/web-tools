import { RefObject, useEffect } from "react";



export default function useClickOutside(cb:Function, ref:RefObject<HTMLElement>){
    useEffect(()=>{
        const listenerFunc = (e:MouseEvent)=>{
            if(!ref.current?.contains(e.target as Node)){
                cb()
            }
        }
        window.addEventListener("click", listenerFunc);

        return ()=>{
            window.removeEventListener("click", listenerFunc)
        }
    }, [cb, ref])
}