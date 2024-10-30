import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import {Home , About , Projects} from './pages'
import { ThemeProvider } from './theme/ThemeContext';

const App = () =>{
    return (
        <ThemeProvider>
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                </Routes>
            </Router>
        </main>
        </ThemeProvider>
    )
}

export default App