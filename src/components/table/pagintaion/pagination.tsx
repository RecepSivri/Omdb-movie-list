import { IPaginationProps } from "../../../models/models";
import "./pagination.scss";
import "../../../App.css";
import { useEffect, useState } from "react";
function Pagination(props: IPaginationProps) {
  const { pageNum, total, changePage, pageListSize } = props;
  const size = Math.ceil(total / 10);
  const [pageList, setPageList] = useState(0);
  useEffect(() => {
    setPageList(Math.ceil(pageNum / pageListSize) - 1);
  }, [pageNum]);

  const calculatePaginatorSize = () => {
    return pageListSize + pageListSize * pageList < size
      ? pageListSize
      : size - pageListSize * pageList;
  };
  return (
    <div className="row-layout-end">
      <div
        className="page-button"
        onClick={() => {
          if (pageNum > 1) {
            changePage(pageNum - 1);
          }
        }}
      >
        {"<"}
      </div>
      {Array.from(
        Array(calculatePaginatorSize()),
        (item: number, index: number) => {
          return (
            <div
              className="page-button"
              style={{
                backgroundColor:
                  index + 1 + pageListSize * pageList === pageNum
                    ? "#ccc"
                    : "#fff",
              }}
              onClick={() => {
                changePage(index + 1 + pageListSize * pageList);
              }}
            >
              {index + 1 + pageListSize * pageList}
            </div>
          );
        },
      )}
      <div
        className="page-button"
        onClick={() => {
          if (pageNum < size) {
            changePage(pageNum + 1);
          }
        }}
      >
        {">"}
      </div>
      <div
        className="page-button"
        style={{ backgroundColor: size === pageNum ? "#ccc" : "#fff" }}
        onClick={() => {
          changePage(size);
        }}
      >
        {size}
      </div>
    </div>
  );
}

export default Pagination;
