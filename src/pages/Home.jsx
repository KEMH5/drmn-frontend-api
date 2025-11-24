import Header from "../components/Header/header";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="tool-desc">
          <h2>Monitor your servers</h2>
          <p>Akaza is great tool</p>
          <p>Out here helping us</p>
          <p>And keep our servers safe</p>
        </div>
        <div>
          <p>Ready to monitor your servers with us?</p>
        </div>
        <div className="linkup">
          <a href="">
            <p>GET STARTED HERE</p>
          </a>
          <img src="/images/arrow.svg" alt="Arrow" />
        </div>
      </div>
    </>
  );
}
