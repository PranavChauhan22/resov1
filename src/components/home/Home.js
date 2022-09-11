import React,{useState,useEffect} from 'react'
import "./Home.css"
import vid from "../../assets/castle.gif"
import Parallax from '../parallax/Parallax';
function Home() {
    const [loading, setLoading] = useState(false);
    console.log(loading)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 5git000);
      }, []);
  return (
    <div>
       {loading?<img src={vid} className="castle_intro"/>:<Parallax/>}
    </div>
  )
}

export default Home