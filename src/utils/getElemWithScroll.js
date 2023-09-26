export const getElemWithScroll = (ref, ref1, scroll) => {
  const elem = ref?.current;
  const elem1 = ref1?.current;
  const scrollElem = scroll?.current;

  const scrollFn = () => {
    if (!elem) return;
    const posTop = elem.getBoundingClientRect().top;

    if (posTop + 100 < window.innerHeight) {
      elem1.classList.add("invisible__footer");
      elem1.classList.remove("visible__footer");
    } else {
      elem1.classList.add("visible__footer");
      elem1.classList.remove("invisible__footer");
    }
  };
  scrollElem?.addEventListener("scroll", scrollFn);

  return () => {
    scrollElem?.removeEventListener("scroll", scrollFn);
  };
};
