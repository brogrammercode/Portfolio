import "./Grid.css";
import { useNavigate } from "react-router-dom";

const tiles = [
  {
    title: "ANIMEE",
    subtitle: "MOBILE APP",
    img: "https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fazuki.6b42d3cf.jpg&w=1920&q=75",
    height: 320,
  },
  {
    title: "ANIMEE",
    subtitle: "MOBILE APP",
    img: "https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplane.8c50393a.jpg&w=1920&q=75",
    height: 600,
  },
  {
    title: "ANIMEE",
    subtitle: "MOBILE APP",
    img: "https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnatural.63553f68.jpg&w=1920&q=75",
    height: 480,
  },
  {
    title: "ANIMEE",
    subtitle: "MOBILE APP",
    img: "https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskiff.a96af1d4.jpg&w=1920&q=75",
    height: 450,
  },
  {
    title: "ANIMEE",
    subtitle: "MOBILE APP",
    img: "https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faiga-square.1d7c2316.jpg&w=1920&q=75",
    height: 570,
  },
  {
    title: "ANIMEE",
    subtitle: "MOBILE APP",
    img: "https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fformat-bar.619d7fd6.jpg&w=1920&q=75",
    height: 310,
  },
];

function splitIntoColumns(arr, numCols) {
  const cols = Array.from({ length: numCols }, () => []);
  arr.forEach((item, idx) => {
    cols[idx % numCols].push(item);
  });
  return cols;
}

const Grid = () => {
  const navigate = useNavigate();
  const columns = splitIntoColumns(tiles, 3);

  return (
    <div className="grid">
      {columns.map((col, colIdx) => (
        <div className="grid-col" key={colIdx}>
          {col.map((tile, idx) => (
            <div
              className="grid-tile"
              onClick={() => navigate(`/project/${idx}`)}
              key={idx}
            >
              <div
                className="grid-tile-img-wrapper"
                style={{ height: `${tile.height}px` }}
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="grid-tile-img"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="grid-tile-overlay"></div>
              </div>
              <div className="grid-tile-title">{tile.title}</div>
              <div className="grid-tile-subtitle">{tile.subtitle}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
