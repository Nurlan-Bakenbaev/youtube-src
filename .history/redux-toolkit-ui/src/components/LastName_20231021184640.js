import React from "react";

const LastName = () => {
  const name = useSelector((state) => state.user.firstName);
  return <div className="font-bold">Last Name</div>;
};

export default LastName;
