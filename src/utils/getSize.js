export const getSize = () => {
  const size = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${size}px`;

  return () => {
    document.body.style.overflow = "unset";
    document.body.style.marginRight = "0px";
  };
};
