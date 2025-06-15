import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <div className="padded-body">
        <NavBar />
        <img
          src="https://joseph.cv/_next/image?url=%2Fproject-covers%2Fplane.jpg&w=1920&q=75"
          alt=""
          className="detail-img"
        />
        <div className="rest">
          <div className="left">
            <div className="left-title">PLANE</div>
            <div className="left-subtitle">PRODUCTIVITY</div>
          </div>
          <div className="right">
            <div className="description">
              <div className="right-desc">
                Plane is a software company combining task management, wikis,
                and editor features into one comprehensive productivity
                platform. I consulted and advised the team around core product
                surfaces. This
              </div>
              <div className="right-desc">
                included redesigning navigation and all task views from scratch
                — kanban, list, calendar, table, and timeilne view.
              </div>
            </div>
            <div className="detail">
              <div className="detail-tile">
                <p>ROLE</p>
                <span>Product Designer</span>
              </div>
              <div className="detail-tile">
                <p>Collaborators</p>
                <span>
                  Plane team <br /> Bryce Li
                </span>
              </div>
              <div className="detail-tile">
                <p>Duration</p>
                <span>3 months</span>
              </div>
            </div>
            <div className="images">
              <img
                src="https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flist-assignee-cropped.23166e7d.jpg&w=1920&q=75"
                alt=""
                className="images-tile"
              />
              <img
                src="https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffilters.4ed82aeb.jpg&w=1920&q=75"
                alt=""
                className="images-tile"
              />
              <img
                src="https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftable-cropped.8a31461c.jpg&w=1920&q=75"
                alt=""
                className="images-tile"
              />
              <img
                src="https://joseph.cv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkanban-cropped.b511c014.jpg&w=1920&q=75"
                alt=""
                className="images-tile"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
