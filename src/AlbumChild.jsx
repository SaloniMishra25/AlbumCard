import React from "react";
import { FaRegIdBadge, FaUser } from "react-icons/fa";

const AlbumChild = ({ album }) => {
  return (
    <div className="album-card">
      <p>
        <FaRegIdBadge className="icon" /> <span>Album ID : </span> &nbsp;{album.id}
      </p>
      <p>
        <FaUser className="icon" /> <span>User ID : </span> &nbsp;{album.userId}
      </p>

      <h3>
        Title :<span> {album.title}</span>
      </h3>
    </div>
  );
};
export default AlbumChild;
