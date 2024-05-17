import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchMovies } from "../../redux/movieSlice";
import { IColumn } from "../../models/models";
import "./mainPage.scss";
import "../../App.css";
import Table from "../../components/table/table";
import Loader from "../../components/loader/loader";
function MainPageComponent() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.movie);
  const { movies, pageNum, total, loading } = data;

  const changePage = (page: number) => {
    dispatch(searchMovies({ name: "ring", page: page }));
  };
  const columns: IColumn[] = [
    { header: "Title", section: "Title" },
    { header: "Type", section: "Type" },
    { header: "ImdbID", section: "imdbID" },
    { header: "Year", section: "Year" },
  ];
  useEffect(() => {
    dispatch(searchMovies({ name: "ring", page: 1 }));
  }, []);
  return (
    <div style={{ width: "80%" }} className="">
      <Table
        data={movies}
        pageNum={pageNum}
        total={total}
        columns={columns}
        changePage={changePage}
        pageListSize = {5}
      />
      {
        loading && 
        <Loader/>
      }
    </div>
  );
}

export default MainPageComponent;
