import { useEffect, useState, useContext } from "react";
import AlbumChild from "./AlbumChild";
import { AppTheme } from "./App";
import "./App.css";

const AlbumParent = () => {
  const [albums, setAlbums] = useState([]);
  const theme = useContext(AppTheme);

  const getAlbums = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumList = await response.json();
    setAlbums(albumList);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className={`album ${theme}`}>
      {albums.map((album) => (
        <AlbumChild album={album} key={album.id} />
      ))}
    </div>
  );
};

export default AlbumParent;
