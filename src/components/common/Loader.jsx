import { useEffect, useState } from "react";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Skills from "../skills/Skills";
import Tags from "../tags/Tags";
import Loading from "./Loading";
import WebFont from "webfontloader";
import Header from '../header/Header'

export default function Loader({ element }) {
    let [ready, setReady] = useState(false)
    let [done, setDone] = useState(false)
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Josefin Sans'],
            },
            active: () => setReady(true)
        })
        let timeout = setTimeout(() => setDone(true), 500)
        return () => clearTimeout(timeout)
    }, [])
    switch (ready && done) {
        case true: return (
            <>
                <Home />
                <Skills />
                <Tags />
                <Contact />
                <Header element={element} />
            </>
        );
        default: return <Loading />
    }
}
