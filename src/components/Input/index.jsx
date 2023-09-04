import React from 'react'
import { Style } from './style'
import { useTranslation } from 'react-i18next'

const Input = ({ textarea,Label,Type }) => {
    const {t} = useTranslation();
    return (
        <>
            {
                textarea ?
                    <Style>
                        <label htmlFor="">{t('msg')}</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </Style>
                    :
                    <Style>
                        <label htmlFor="">{t(Label)}</label>
                        <input type={Type} />
                    </Style>
            }
        </>
    )
}

export default Input