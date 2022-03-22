import { useState } from "react";

export default function useLanguage() {
    let settedLanguage = localStorage.getItem('setLanguage')
    let navigatorLanguage = navigator.language.slice(0, 2)
    let available = ['es', 'en']
    let preferred = available.includes(navigatorLanguage) ? navigatorLanguage : 'en'
    let language = settedLanguage || preferred
    let [current, setCurrent] = useState(language)
    console.log(current)
    let switcher = {
        "es": 'en',
        "en": 'es'
    }
    
    let toggle = () => {
        localStorage.setItem('setLanguage', switcher[current])
        setCurrent(switcher[current])
    }
    return { current, toggle }
}
