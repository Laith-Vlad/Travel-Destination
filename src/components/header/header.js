import '../header/header.css';
import Nav from '../header/nav/nav';
function Header(props) {
    return <div className='title' >
      <div ><h1 >Tourica</h1></div>
       <div><Nav  /></div>
    </div> ;
  }
  export default Header;