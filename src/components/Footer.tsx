import React, { FC } from 'react'
import { useTranslation } from "react-i18next"

const Footer: FC = () => {
    const { t } = useTranslation()

    return (
        <div className="Footer mt-2 text-xs text-muted text-center">
        <div className="flex flex-col md:flex-row justify-center items-center mt-2">
            <div>
                {t('powered-by')} <a className="underline hover:no-underline" href="https://github.com/xkiller838" target="_blank" rel="noopener noreferrer">Manuel Parada</a>
                
            </div>
        </div>
    </div>
    )
}

export default Footer
