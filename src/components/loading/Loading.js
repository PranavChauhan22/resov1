import React, { useState, useEffect } from "react";
import load from "../../assets/Loading.gif";
import Home from "../home/Home";
import "./Loading.css";
function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
    {loading?
    <div className="loading">
      <img src={load} className="loading_gif" />
    </div>:<Home/>}
    </>
  );
}

export default Loading;
