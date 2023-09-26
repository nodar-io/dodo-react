import { useEffect, useRef } from "react";
import { observeSection } from '../utils/observeSection'

const Section = ({ id, setActive, children }) => {
  const sectionRef = useRef(null);
  const section = document.querySelector(`.section`);
  
  useEffect(() => {
    observeSection(section, setActive, sectionRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setActive]);

  return (
    <h3 ref={sectionRef} className="heading" id={id}>
      {children}
    </h3>
  );
};

export default Section;
