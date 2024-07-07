import React from "react";
import './FixImage.css'

export default function FixImage(classStyle) {
    console.log("classStyle", classStyle.classStyle)
    return (
        <div className={`${classStyle.classStyle}`}>

        </div>
    )
}