import React from "react";

const HomeFooter = () => {
  return (
    <footer className="p-4 bg-(--surface)">
      <div>&copy; All Rights Reserved {new Date().getFullYear()}</div>
    </footer>
  );
};

export default HomeFooter;
