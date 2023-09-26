
const PizzaSort = ({ sizes, types,activeSize,activeType,setActiveSize,setActiveType }) => {
  

  return (
    <div className="sort__layout">
      <div className="sort__selector">
        <ul className="sort__size">
          {sizes.map((sizeId,i) => (
            <li
              key={sizeId}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active_select" : ""}
            >
              {sizeId}
            </li>
          ))}
        </ul>
        <ul className="sort__type">
          {types.map((typeId,i) => (
            <li
              key={(typeId)}
              onClick={() => setActiveType(i)}
              className={activeType === i ? "active_select" : ""}
            >
              {typeId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaSort;
