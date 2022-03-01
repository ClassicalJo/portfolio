import { useState } from "react";

export default function useLanguage() {
    let preferred = navigator.language.slice(0, 2)
    let available = ['es', 'en']
    let language = available.includes(preferred) ? preferred : 'en'
    let [current, setCurrent] = useState(language)
    let switcher = {
        "es": 'en',
        "en": 'es'
    }
    let toggle = () => setCurrent(switcher[current])
    return { current, toggle }
}
