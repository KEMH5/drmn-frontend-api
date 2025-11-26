import { Link } from "react-router-dom";
import Header from "../components/Header/header";
import "../styles/home.css";
export default function Home() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="tool-desc">
          <h4 className="topic">Monitor your servers</h4>
          <p>Akaza is great tool out here helping us</p>
          <p>And keep our servers safe</p>
          <a href="#" className="topic">Supports</a>
          <a href="#" className="topic">Instagram</a>
          <a href="#" className="topic">Twitter</a>
          <a href="#" className="topic">Discord</a>
        </div>
        <div className="ft-desc">
          <div className="mn-desc">
            <p>Ready to monitor your servers with us?</p>
          </div>
          <div className="linkup">
            <a href="" className="link-up-description">
              LET'S MONITOR
            </a>
            <Link to="/visualizer" className="link-to-main" >
              <img src="/images/arrow.svg" alt="Arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
