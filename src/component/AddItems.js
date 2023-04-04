import React, { useState } from "react";

const AddItems = () => {
  const [inptData, setInptData] = useState({
    name: "",
    class: "",
    subject: "",
  });
  const [arrData, setArrData] = useState([
    { name: "", class: "", subject: "" },
  ]);

  const handleInpt = (ind) => (e) => {
    let changData = arrData.map((val, id) => {
      if (ind === id) {
        return { ...val, [e.target.name]: e.target.value };
      }
      return val;
    });
    setArrData(changData);
  };

  const deletData = (indx) => {
    setArrData(
      arrData.filter((val, id) => {
        return indx !== id;
      })
    );
  };

  const submtData = () => {
    let dataAlrt = true;
    const allData = arrData.map((val) => {
      if (!val.name || !val.class || !val.subject) {
        dataAlrt = false;
      }
      return val;
    });
    if (dataAlrt) {
        alert('Please Check Console')
      console.log(allData);
    } else {
      alert("Please Fill the data");
    }
  };

  return (
    <>
      <div className="mainBX">
        <ul>
          {arrData.map((val, ind) => {
            return (
              <li key={ind}>
                <input
                  placeholder="Name"
                  onChange={handleInpt(ind)}
                  value={val.name}
                  name="name"
                />
                <input
                  placeholder="Class"
                  onChange={handleInpt(ind)}
                  value={val.class}
                  name="class"
                />
                <input
                  placeholder="Subject"
                  onChange={handleInpt(ind)}
                  value={val.subject}
                  name="subject"
                />

                {arrData.length === 1 ? (
                  <button> Delete</button>
                ) : (
                  <button onClick={() => deletData(ind)}>Delete</button>
                )}
              </li>
            );
          })}
        </ul>

        <div className="butns">
          <button
            onClick={() => {
              setArrData(
                [...arrData, inptData],
                setInptData({ name: "", class: "", subject: "" })
              );
            }}
          >
            Add Item
          </button>
          <button onClick={submtData}>Submit Data</button>
        </div>
      </div>
    </>
  );
};

export default AddItems;
