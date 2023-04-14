import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const { fotos } = useContext(Context);
  const fotosFavoritas = fotos.filter((foto) => foto.favorito);
  const numFotosFavoritas = fotosFavoritas.length;

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {numFotosFavoritas === 0 ? (
          <p className="info">No tienes fotos agregadas como favoritas</p>
        ) : (
          fotosFavoritas.map((foto, i) => (
            <img src={foto.src} alt="" key={i} />
          ))
        )}
      </div>
    </div>
  );
}

