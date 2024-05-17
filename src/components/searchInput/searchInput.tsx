import { ISearchInput } from "../../models/models";
import "./searchInput.scss";
function SearchInput(props: ISearchInput) {
  const { value, setValue } = props;
  return (
    <div className="search-container">
      <input
        className="search-input"
        onChange={(event: any) => setValue(event.target.value)}
        value={value}
      />
      <img
        width={"32px"}
        style={{ marginTop: "2px", marginRight: "2px" }}
        src={require("../../assets/search.png")}
      />
    </div>
  );
}

export default SearchInput;
