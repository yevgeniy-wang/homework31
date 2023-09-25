import './App.css';
import '../normalize.css'
import {ImageList} from "../imageList/ImageList";
import {TfiAnchor,} from "react-icons/tfi"
import {LuBot, LuTreePine} from "react-icons/lu";
import {BsAirplane, BsRocket} from "react-icons/bs";



function App() {
  const imageArray = [
    {
      id: 1,
      count: 0,
      component: <TfiAnchor className={'image-list__icon'}/>
    },
    {
      id: 2,
      count: 0,
      component: <LuBot className={'image-list__icon'}/>
    },
    {
      id: 3,
      count: 0,
      component: <LuTreePine className={'image-list__icon'}/>
    },
    {
      id: 4,
      count: 0,
      component: <BsAirplane className={'image-list__icon'}/>
    },
    {
      id: 5,
      count: 0,
      component: <BsRocket className={'image-list__icon'}/>
    }
  ]


  return (
    <div className="App">
      <ImageList imageArray={imageArray}/>
    </div>
  );
}

export default App;
