import { IColumn, ITableProps } from '../../models/models';
import './table.scss' 
import '../../App.css'
function Table(props: ITableProps<any>) {
  const {data, pageNum, total, columns} = props;
  return (
    <div className="column-layout-start table">
      <div key={'table-header'} className="row-layout-start table-header">
      {columns.map((item: IColumn, index: number) => (
        <div className="table-row-cell row-layout-center" style={{width: 100/columns.length + '%'}} >{item.header}</div>
      ))}
      </div>
      {data.map((item: any, index: number) => (
        <div key={index} className="row-layout-start table-body">
          {columns.map((value: IColumn, index: number) => (
        <div className="table-row-cell row-layout-center" style={{width: 100/columns.length + '%'}} key={index+'-'+item[value.section]}>{item[value.section]}</div>
      ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
