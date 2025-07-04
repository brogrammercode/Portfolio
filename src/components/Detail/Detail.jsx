import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { projectDetails } from "../Grid/projectDetails";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const detailData = projectDetails[parseInt(id) || 0];

  return (
    <>
      <div className="padded-body">
        <NavBar />
        <img
          src={detailData.coverImage}
          alt={detailData.title}
          className="detail-img"
        />
        <div className="rest">
          <div className="left">
            <div className="left-title">{detailData.title}</div>
            <div className="left-subtitle">{detailData.subtitle}</div>
          </div>
          <div className="right">
            <div className="description">
              {detailData.description.map((desc, index) => (
                <div className="right-desc" key={index}>
                  {desc}
                </div>
              ))}
            </div>
            <div className="detail">
              <div className="detail-tile">
                <p>ROLE</p>
                <span>{detailData.role}</span>
              </div>
              <div className="detail-tile">
                <p>Collaborators</p>
                <span>
                  {detailData.collaborators.map((person, index) => (
                    <div key={index}>{person}</div>
                  ))}
                </span>
              </div>
              <div className="detail-tile">
                <p>Duration</p>
                <span>{detailData.duration}</span>
              </div>
            </div>
            <div className="images">
              {detailData.images.map((img, index) => (
                <img
                  src={img}
                  alt={`screenshot-${index}`}
                  className="images-tile"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
