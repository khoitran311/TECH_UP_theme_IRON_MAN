import React from "react";

export const App = ({ user }) => {
  const userLinks = user.user_links;

  return (
    <React.Fragment>
      {" "}
      <div className="text-2xl">Hello {user.first_name}!</div>
    </React.Fragment>
  );
};
