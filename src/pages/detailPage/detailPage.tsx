import "./detailPage.scss";
import "../../App.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetail } from "../../redux/detailSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface IDetailPageComponentProps {
  toastr: any;
}
function DetailPageComponent(props: IDetailPageComponentProps) {
  const params = useParams();

  const { id } = params;
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.detail);
  const {
    Title,
    Poster,
    Genre,
    Plot,
    Year,
    Country,
    imdbRating,
    imdbVotes,
    Runtime,
  } = data;

  useEffect(() => {
    dispatch(getDetail({ id: id ? id : "" }));
  }, []);

  return (
    <div
      className="row-layout-center-start information-area"
      style={{ backgroundColor: "#1F1F1F" }}
    >
      <div
        className="information-card column-layout-start"
        style={{ marginTop: "120px" }}
      >
        <div className="movie-title">{Title}</div>
        <div className="row-layout-start">
          <div className="sub-information">{Year}</div>
          <div className="sub-information">{Country}</div>
          <div className="sub-information">{Runtime}</div>
        </div>
        <div className="row-layout-start">
          <div>
            <img src={Poster} />
          </div>
          <div className="column-layout-start" style={{ marginLeft: "40px" }}>
            <div className="row-layout-start">
              {Genre.split(",").map((item) => (
                <div className="genres">{item}</div>
              ))}
            </div>
            <div className="plot">{Plot}</div>
            <div className="row-layout-start" style={{ marginTop: "15px" }}>
              <img src={require("../../assets/star.png")} width={"28px"} />
              <div className="imdb-rating">{imdbRating}</div>
              <img
                style={{ marginLeft: "10px", marginTop: "-2px" }}
                src={require("../../assets/vote.png")}
                width={"28px"}
              />
              <div className="imdb-votes">{imdbVotes}</div>
            </div>
            <div style={{ marginTop: "10px", width: "100%" }}>
              <div className="information-seperator">
                <div className="row-layout-start">
                  <div className="movie-information">Director:</div>
                </div>
              </div>
              <div className="information-seperator">
                <div className="row-layout-start">
                  <div className="movie-information">Writers:</div>
                </div>
              </div>
              <div className="information-seperator">
                <div className="row-layout-start">
                  <div className="movie-information">Stars:</div>
                </div>
              </div>
              <div className="information-seperator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPageComponent;
