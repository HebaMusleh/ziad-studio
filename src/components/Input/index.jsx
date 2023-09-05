import React from 'react'
import { Style } from './style'
import { useTranslation } from 'react-i18next'

const Input = ({ textarea,Label,Type,name }) => {
    const {t} = useTranslation();
    return (
        <>
            {
                textarea ?
                    <Style>
                        <label htmlFor="">{t('msg')}</label>
                        <textarea cols="30" rows="5" name={name}></textarea>
                    </Style>
                    :
                    <Style>
                        <label htmlFor="">{t(Label)}</label>
                    <input type={Type} name={name}/>
                    </Style>
            }
        </>
    )
}

export default Input