import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchMovies } from "../../redux/movieSlice";
import { IColumn } from "../../models/models";
import "./mainPage.scss";
import "../../App.css";
import Table from "../../components/table/table";
import Loader from "../../components/loader/loader";
import { DatePicker, Select } from "antd";
import SearchInput from "../../components/searchInput/searchInput";
import moment from "moment";

interface IMainPageComponentProps {
  toastr: any;
}
function MainPageComponent(props: IMainPageComponentProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.movie);
  const { movies, pageNum, total, loading } = data;
  const [input, setInput] = useState("pokemon");
  const [search, setSearch] = useState(input);
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const { toastr } = props;

  const changePage = (page: number) => {
    dispatch(
      searchMovies({ name: search, page: page, year: year, type: type }),
    );
  };
  const columns: IColumn[] = [
    { header: "Title", section: "Title", width: "40%" },
    { header: "Type", section: "Type", width: "15%" },
    { header: "ImdbID", section: "imdbID", width: "15%" },
    { header: "Year", section: "Year", width: "15%" },
    {
      header: "Detail",
      template: () => (
        <>
          <img width={"32px"} src={require("../../assets/movie.png")} />
        </>
      ),
      width: "15%",
    },
  ];
  useEffect(() => {
    dispatch(searchMovies({ name: search, page: 1, year: year, type: type }));
  }, []);

  const setValue = (value: string) => {
    setInput(value.trim());
  };
  const onSearch = () => {
    setSearch(input);
    if (input.length >= 3) {
      dispatch(searchMovies({ name: input, page: 1, year: year, type: type }));
    } else {
      toastr("Search Error", "Please enter input with a minimum length of 3!");
    }
  };

  const onChange = (value: Date) => {
    if (value !== null) {
      setYear(moment(new Date(value)).format("yyyy"));
    } else {
      setYear("");
    }
  };
  return (
    <div className="column-layout-start-center" style={{ width: "100%" }}>
      <div className="app-header">
        Movie Search Engine
        <img
          className="movie-icon"
          src={require("../../assets/movie-icon.png")}
        />
      </div>
      <div className="search-area">
        <SearchInput value={input} setValue={setValue} />
        <DatePicker className="year-input" onChange={onChange} picker="year" />
        <Select
          className="select-type"
          value={type}
          onChange={(value) => {
            setType(value);
          }}
          options={[
            { value: "", label: <span>All</span> },
            { value: "movie", label: <span>Movie</span> },
            { value: "series", label: <span>Series</span> },
            { value: "epilsode", label: <span>Epilsode</span> },
          ]}
        />
        <div
          className="search-button"
          onClick={() => {
            onSearch();
          }}
        >
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
          notFoundText={"Movie not found!"}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default MainPageComponent;
