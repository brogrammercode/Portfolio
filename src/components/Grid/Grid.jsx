import { useNavigate } from "react-router-dom";
import { projectDetails } from "./projectDetails";
import "./Grid.css";

const Grid = () => {
  const navigate = useNavigate();

  return (
    <section className="masonry">
      {projectDetails.map((tile, index) => (
        <div
          key={index}
          className="masonry-item"
          onClick={() => navigate(`/project/${index}`)}
        >
          <img src={tile.coverImage} alt={tile.title} className="tile-img" />
          <div className="tile-info">
            <h3 className="tile-title">{tile.title}</h3>
            <p className="tile-subtitle">{tile.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Grid;
