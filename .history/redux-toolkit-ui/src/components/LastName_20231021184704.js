import React from "react";

const LastName = () => {
  const name = useSelector((state) => state.user.lastName);
  return <div className="font-bold">{}</div>;
};

export default LastName;
