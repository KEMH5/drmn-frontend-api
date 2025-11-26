import Menu from '../Menu/menu'
import './header.css'
export default function Header(){
    return(
        <div className="home-title">
          <div className="akz-container">
            <h1>Akaza</h1>
            <img src="/images/akaza.svg" alt="akaza-icon" className="akz-img" />
          </div>
          <Menu />
        </div>
    )
}