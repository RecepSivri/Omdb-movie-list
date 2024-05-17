import "./loader.scss";
import "../../App.css";
function Loader() {
  return <div className="loader"> 
    <img width={'64px'} src={require('../../assets/loading.gif')}/>
  </div>
}
export default Loader;
