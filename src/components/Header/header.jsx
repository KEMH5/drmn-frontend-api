import './header.css'
export default function Header(){
    return(
        <div className="home-title">
          <div className="akz-container">
            <h1>Akaza</h1>
            <img src="/images/akaza.svg" alt="akaza-icon" className="akz-img" />
          </div>
          <div className="menu-container">
            <p className="menu-items">MENU</p>
            <img
              src="/images/menu-plus.svg"
              alt="plus image"
              color="black"
              className="plus"
            />
          </div>
        </div>
    )
}