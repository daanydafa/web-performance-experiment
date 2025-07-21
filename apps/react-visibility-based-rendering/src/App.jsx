import { useEffect, useState } from 'react';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    const [route, setRoute] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const match = route.match(/^#\/article\/(\d+)$/);
    const articleId = match ? match[1] : null;

    return (
        <>
            <Header />
            <main>
                {articleId ? (
                    <ArticleDetail id={articleId} />
                ) : (
                    <Home />
                )}
            </main>
            <Footer />
        </>
    );
}
