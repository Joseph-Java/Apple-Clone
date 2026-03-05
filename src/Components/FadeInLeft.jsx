import React, { useEffect, useRef, useState } from 'react'


// This is a scroll-triggered animation wrapper component.
function FadeInLeft({children, delay}) {

  const ref = useRef(null);

//  This controls whether the element is:
//  Visible → animate in
//  Not visible → animate out
//  Initial state is false, meaning:
//  The element starts hidden
//  Positioned left (-translate-x-20)
//  Opacity is 0
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
// The IntersectionObserver browser API detects when an element enters or leaves the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting) // This becomes true when at least 20% of the element is visible cos of the threshold set to 0.2
      },
      { threshold: 0.2 }
    );

// This tells the observer: "Watch this specific div"
    if (ref.current) observer.observe(ref.current);

// This is like a cleanup function, i.e. when the components unmounts.
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
      `}
    >
      {/* This is like whatever we wrap inside of the component, and it is the sections is inside of the IPhone17Pro component */}
      {children}
    </div>
  )
}

export default FadeInLeft