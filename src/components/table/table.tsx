import { IColumn, ITableProps } from "../../models/models";
import "./table.scss";
import "../../App.css";
import Pagination from "./pagination/pagination";
function Table(props: ITableProps<any>) {
  const {
    data,
    pageNum,
    total,
    columns,
    changePage,
    pageListSize,
    notFoundText,
  } = props;
  return (
    <>
      {data.length > 0 && (
        <div>
          <div className="column-layout-start table">
            <div key={"table-header"} className="row-layout-start table-header">
              {columns.map((item: IColumn, index: number) => (
                <div
                  className="table-row-cell row-layout-center"
                  style={{ width: 100 / columns.length + "%" }}
                >
                  <h4 className="header-font">{item.header}</h4>
                </div>
              ))}
            </div>
            {data.map((item: any, index: number) => (
              <div
                key={index}
                className="row-layout-start table-body"
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "#f4f4f4",
                }}
              >
                {columns.map((value: IColumn, index: number) => (
                  <div
                    className="table-row-cell row-layout-center"
                    style={{ width: 100 / columns.length + "%" }}
                    key={index + "-" + item[value.section]}
                  >
                    {item[value.section]}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Pagination
            pageNum={pageNum}
            total={total}
            changePage={changePage}
            pageListSize={pageListSize}
          />
        </div>
      )}
      {data.length === 0 && (
        <div className="row-layout-center" style={{ marginTop: "100px" }}>
          <img width={"96x"} src={require("../../assets/not-found.png")} />
          <div className="not-found-text">{notFoundText}</div>
        </div>
      )}
    </>
  );
}

export default Table;
