import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Home , About , Projects} from './pages'
import { ThemeProvider } from './theme/ThemeContext';
import {useEffect, useRef, useState} from "react";
import lofiSound from "./assets/lofi.mp3";

const App = () =>{
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)
    const lofiRef = useRef(new Audio(lofiSound));
    lofiRef.current.volume = 0.4

    useEffect(() => {
        if(isPlayingMusic){
            lofiRef.current.play()
        }else {
            lofiRef.current.pause()
        }

    }, [isPlayingMusic]);

    return (
        <ThemeProvider>
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Routes>
                    <Route path='/' element={<Home isPlayingMusic={isPlayingMusic} setIsPlayingMusic={setIsPlayingMusic} />}/>
                    <Route path='/about' element={<About isPlayingMusic={isPlayingMusic} setIsPlayingMusic={setIsPlayingMusic}/>}/>
                    <Route path='/projects' element={<Projects isPlayingMusic={isPlayingMusic} setIsPlayingMusic={setIsPlayingMusic}/>}/>
                </Routes>
            </Router>
        </main>
        </ThemeProvider>
    )
}

export default App