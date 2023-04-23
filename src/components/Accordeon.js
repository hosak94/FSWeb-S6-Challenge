import React, { useState } from "react";

const Accordeon = (props) => {
  const [closed, setClosed] = useState(true);
  const { children, title } = props;

  const toggle = () => setClosed(!closed);

  return (
    <div className="accordeon">
      <div className="accordeon_title" onClick={toggle}>
        {title}
      </div>
      {!closed && <div className="accordeon_detail">{children}</div>}
    </div>
  );
};

export default Accordeon;
