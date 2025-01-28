import React from "react";

const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive</h1>
      <div>
        <h2>Archive</h2>
        <span>{archive}</span>
      </div>
      <div>
        <h2>Latest</h2>
        <span>{latest}</span>
      </div>
    </div>
  );
};

export default ArchiveLayout;
