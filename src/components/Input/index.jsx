import React from 'react'
import { Style } from './style'
import { useTranslation } from 'react-i18next'

const Input = ({ textarea,Label,Type,name ,className,onChange,value}) => {
    const {t} = useTranslation();
    return (
        <>
            {
                textarea ?
                    <Style>
                        <label htmlFor="">{t('msg')}</label>
                        <textarea 
                        cols="30" 
                        rows="5" 
                        name={name} 
                        className={className} 
                        required 
                        onChange={onChange}
                        value={value}
                        >
                        </textarea>
                    </Style>
                    :
                    <Style>
                        <label htmlFor="">{t(Label)}</label>
                        <input 
                        type={Type} 
                        name={name} 
                        className={className} 
                        required 
                        onChange={onChange}
                        value={value}
                        />
                    </Style>
            }
        </>
    )
}

export default Input