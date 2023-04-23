import { Children } from "react";
import { LoadingOverlay, Table } from "@mantine/core";
import { AnyObject } from "common/types";

import { TableType } from "./types";

TableContainer.defaultProps = {
  tableProps: {},
  isLoading: false,
  key: "id",
};

function TableContainer<T = AnyObject>({
  data,
  tableProps,
  isLoading,
  format,
  key,
}: TableType<T>) {
  return (
    <div className="flex flex-col flex-grow relative">
      <Table {...tableProps}>
        <thead>
          <tr>
            {Children.toArray(
              format?.map((f) => {
                return <th>{f?.label ?? ""}</th>;
              }),
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => (
            <tr key={(dt as AnyObject)?.[key]}>
              {Children.toArray(
                format?.map((f) => {
                  return <td>{(dt as AnyObject)?.[f.colKey] ?? f.defaultValue ?? ""}</td>;
                }),
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <LoadingOverlay visible={isLoading ?? false} />
    </div>
  );
}

export default TableContainer;
