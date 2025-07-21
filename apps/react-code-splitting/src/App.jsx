import { useEffect, useState, lazy, Suspense } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    const [route, setRoute] = useState(window.location.hash);

    const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));

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
                    <Suspense fallback={<div>Memuat artikel...</div>}>
                        <ArticleDetail id={articleId} />
                    </Suspense>
                ) : (
                    <Home />
                )}
            </main>
            <Footer />
        </>
    );
}
