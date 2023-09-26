export const observeSection = (section, setActive, sectionRef) => {
  const options = {
    root: section,
    rootMargin: "-100px",
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      } else if (
        !entry.isVisible &&
        entry.target.id === "pizzas" &&
        entry.boundingClientRect.y > 350
      ) {
        setActive("");
      }
    });
  }, options);

  const varRef = sectionRef.current;

  observer.observe(varRef);

  return () => {
    observer.unobserve(varRef);
    setActive("");
  };
};
