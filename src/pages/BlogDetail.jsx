
import { soundoff, soundon } from '../assets/icons/index.js'
import { useTheme } from "../theme/ThemeContext.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { useEffect, useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom';

const BlogDetail = ({ isPlayingMusic, setIsPlayingMusic }) => {
    const { theme } = useTheme();
    const { fileName } = useParams();

    const [content, setContent] = useState('');

    useEffect(() => {
        console.log(fileName)
        fetch(`/blog/${fileName}.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [fileName]);

    // Handler for textarea changes
    const handleEditorChange = (event) => {
        setEditorContent(event.target.value);
    };

    return (
        <>
            <Navbar />
            <section className="max-container">
                <div className="prose prose-base max-w-none text-black dark:text-white
                  prose-h1:text-blue-500
                  dark:prose-h1:text-yellow-400
                  prose-h2:text-blue-500
                  dark:prose-h2:text-yellow-400
                  prose-h3:text-blue-500
                  dark:prose-h3:text-yellow-400
                  prose-h4:text-blue-500
                  dark:prose-h4:text-yellow-400
                  prose-h5:text-blue-500
                  dark:prose-h5:text-yellow-400
                  prose-strong:text-blue-500
                  dark:prose-strong:text-yellow-400">
                    <Markdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </Markdown>
                </div>

            </section>
            <Footer />
            <div className="w-1/2 h-ful pr-8">
                <div className="fixed bottom-2 left-2">
                    <img
                        src={!isPlayingMusic ? soundoff : soundon}
                        alt="sound"
                        className="w-10 h-10 cursor-pointer object-contain"
                        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    />
                </div>
            </div>
        </>
    )
}


export default BlogDetail
