import Header from "../components/Header/header";
import Menu from "../components/Menu/menu";
import '../styles/visualizer.css';

export default function Visualiser() {
  return (
    <>
      <div className="vz-main">
        <div className="pg-desc">
          <h1>01</h1>
          <p>Vizualizer</p>
        </div>
        <Menu className="mn-mdf"/>
      </div>
    </>
  );
}
