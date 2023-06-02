import React, { useEffect, useState } from "react";
import fetchUtil from "../../common/fetch-utils";
import { apiEndpoint } from "../../common/constants";
import "./MovieGrid.css";
function MovieGrid({ apiends }) {
  const [gridData, setGridData] = useState("");
  useEffect(() => {
    const mdata = fetchUtil.get(apiends);
    mdata.then((data) => {
      setGridData(data["results"]);
    });
  }, []);
  console.log(gridData);
  return (
    <div className="grid_slider">
      {gridData &&
        gridData.map((data) => {
          return (
            <div
              className="grid_card"
              style={{
                backgroundImage: `url(${apiEndpoint.imageUrl}${data["poster_path"]})`,
              }}
            >
              <p className="grid_movieName">
                {data.title ? data.title : data.name}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default MovieGrid;
