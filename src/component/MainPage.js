import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { apiStart, loading, error } from "../action/action";

const MainPage = () => {
  const selector = useSelector((data) => data);
  const dispatch = useDispatch();

  const [state, setstate] = useState(null);

  console.log("data", selector);


  useEffect(() => {
    dispatch(loading(true));

    axios.get("http://localhost:5001/user").then((res) =>
    {
      dispatch(apiStart(res.data));
      dispatch(loading(false));

    }).catch(err=>{
      console.log(err);
      // dispatch(loading(false));
      dispatch(error(err.message));
      setstate(err.message)
    });
    
     // eslint-disable-next-line
  }, []);

  return (
    <>
   {selector.loading ? 
    <div style={{height:"100vh",display:"grid",width:"100%",placeItems:"center",fontSize:"40px"}}>Loading....</div>
    ? selector.error : <p>{state}</p>  : <div className="container">
        <div className="row">
          {selector.data?.length && selector.data.map((val, id) => {
            return (
              <div className="col-md-4" key={id}>
                <div
                  className="main_bx"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    marginTop: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div className="bx_img">
                    <img src={val.imgSrc} alt={val.name} width="100%" />
                  </div>
                  <div className="bx_cont" style={{ padding: "10px" }}>
                    <h4>Name : {val.name}</h4>
                    <p>
                      Email : {val.email}, Phone : {val.phone}
                    </p>
                    <p>
                      City : {val.city}, Country : {val.country}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>}
    </>
  );
};

export default MainPage;
