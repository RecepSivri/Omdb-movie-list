import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchMovies } from "../../redux/movieSlice";
import { IColumn } from "../../models/models";
import "./mainPage.scss";
import "../../App.css";
import Table from "../../components/table/table";
import Loader from "../../components/loader/loader";
import SearchInput from "../../components/searchInput/searchInput";
function MainPageComponent() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.movie);
  const { movies, pageNum, total, loading } = data;
  const [search, setSearch] = useState('pokemon');

  const changePage = (page: number) => {
    dispatch(searchMovies({ name: search, page: page }));
  };
  const columns: IColumn[] = [
    { header: "Title", section: "Title" },
    { header: "Type", section: "Type" },
    { header: "ImdbID", section: "imdbID" },
    { header: "Year", section: "Year" },
  ];
  useEffect(() => {
    dispatch(searchMovies({ name: search, page: 1 }));
  }, []);

  useEffect(() => {
    console.log(search)
  }, [search]);

  const setValue = (value: string) => {
    setSearch(value.trim());
  }
  return (
    <div className="column-layout-start-center" style={{ width: "100%" }}>
      <div className="search-area">
        <SearchInput value={search} setValue= {setValue}/>
        <div className="search-button" onClick={() => {dispatch(searchMovies({ name: search, page: 1 }));}}>
          Search
        </div>
      </div>

      <div style={{ width: "80%" }}>
        <Table
          data={movies}
          pageNum={pageNum}
          total={total}
          columns={columns}
          changePage={changePage}
          pageListSize={5}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default MainPageComponent;
