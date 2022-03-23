import { Suspense } from 'react'
import Background from "./background";
import Grid from "./Grid";
import Loading from '../common/Loading';
import Header from './header/Header';
export default function Sidepage() {
    return (
        <div className="sidepage">
            <Suspense fallback={<Loading />}>
                <Background />
                <Grid />
                <Header />
            </Suspense>

        </div>
    )
}
