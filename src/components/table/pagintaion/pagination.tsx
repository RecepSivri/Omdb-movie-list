import { IPaginationProps } from "../../../models/models";
import "./pagination.scss";
import "../../../App.css";
import { useEffect, useState } from "react";
function Pagination(props: IPaginationProps) {
  const { pageNum, total, changePage } = props;
  const size = Math.ceil(total / 10);
  const pageListSize = 5;
  useEffect(() => {
    console.log(pageNum);
  }, [pageNum]);
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
      {Array.from(Array(pageListSize), (item: number, index: number) => {
        return (
          <div
            className="page-button"
            style={{ backgroundColor: index + 1 === pageNum ? "#ccc" : "#fff" }}
            onClick={() => {
              changePage(index + 1);
            }}
          >
            {index + 1}
          </div>
        );
      })}
      <div
        className="page-button"
        onClick={() => {
          if (pageNum <= size) {
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
