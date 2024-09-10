import React from 'react'
import { LANGUAGES } from '../utils/presets'

export default function Translation(props) {
    const { textElement, toLanguage, translating, setToLanguage, generateTranslation } = props
    return (
        <>
            {(textElement && !translating) && (
                <p>{textElement}</p>
            )}
            {!translating && (<div className='flex flex-col gap-1 mb-4'>
                <p className='text-xs sm:text-sm font-medium text-slate-800 mr-auto mb-4'>Sorry The Translation module is not currently showing results *BUMMER*</p>
                <p className='text-xs sm:text-sm font-medium text-slate-500 mr-auto px-3'>To language</p>
                <div className='flex items-stretch gap-2 sm:gap-4' >
                    <select value={toLanguage} className='flex-1 outline-none w-full focus:outline-none bg-white duration-200 p-2  rounded' onChange={(e) => setToLanguage(e.target.value)}>
                        <option value={'Select language'}>Select language</option>
                        {Object.entries(LANGUAGES).map(([key, value]) => {
                            return (
                                <option key={key} value={value}>{key}</option>
                            )
                        })}

                    </select>
                    <button onClick={generateTranslation} className='specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200' >Translate</button>
                </div>
            </div>)}
        </>
    )
}