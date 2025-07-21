import { useEffect, useRef, useState } from 'react';

export default function LazyRender({ children }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection:', entry.isIntersecting, entry.target);
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.25,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: '100px', background: visible ? 'white' : 'lightgray' }}>
      {visible ? children : null}
    </div>
  );
}
