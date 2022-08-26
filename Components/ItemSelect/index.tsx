import React from "react";
import styles from "./itemSelect.module.css"

export interface SelectItemIE{
    name:string
    value: string|number
}

interface SelectIE{
    onChange: (value:string|number) => void
    items: SelectItemIE[]
    value?:number
}

export const ItemSelect: React.FC<SelectIE> = (props) =>{
    let options = new Array()
    
    props.items.map((item:SelectItemIE)=>{
        options.push(
            <option>{item.name}</option> 
            )
    })
    
    const getValue = (name:string) =>{
        let val;
        props.items.map((item:SelectItemIE) => {
            if (item.name == name){
                val =  item.value
            }
        })
        return val
    }
    const getName = (value:number) =>{
        let name;
        props.items.map((item:SelectItemIE) => {
            if (item.value == value){
                name =  item.name
            }
        })
        return name
    }
    
    
    return(
        <div>
            {
                props.value == undefined?
                    <select className={styles.myselect} onChange={(e)=>props.onChange(getValue(e.target.value) as any)}>    
                        {options}
                    </select>
                :
                    <select value={getName(props.value)} className={styles.myselect} onChange={(e)=>props.onChange(getValue(e.target.value) as any)}>    
                        {options}
                    </select>
            }
        </div>
    )
}