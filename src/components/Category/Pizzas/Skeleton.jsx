import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={450}
    viewBox="0 0 250 450"
    backgroundColor="#c5bfbf"
    foregroundColor="#ecebeb"
  >
    <rect x="16" y="237" rx="3" ry="3" width="152" height="25" />
    <rect x="10" y="273" rx="3" ry="3" width="236" height="91" />
    <circle cx="138" cy="114" r="108" />
    <rect x="11" y="407" rx="0" ry="0" width="58" height="30" />
    <rect x="116" y="405" rx="0" ry="0" width="114" height="34" />
  </ContentLoader>
);
