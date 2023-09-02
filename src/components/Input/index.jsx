import React from 'react'
import { Style } from './style'

const Input = ({ textarea }) => {
    return (
        <>
            {
                textarea ?
                    <Style>
                        <label htmlFor="">الرسالة</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </Style>
                    :
                    <Style>
                        <label htmlFor="">الاسم الكامل</label>
                        <input type="text" />
                    </Style>
            }
        </>
    )
}

export default Input