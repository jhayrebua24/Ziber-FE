import { Children } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { LoadingOverlay, Menu, Table } from "@mantine/core";
import { AnyObject } from "common/types";
import get from "lodash.get";

import { TableType } from "./types";

TableContainer.defaultProps = {
  tableProps: {},
  isLoading: false,
  key: "id",
  actionMenu: [],
};

function TableContainer<T = AnyObject>({
  data,
  tableProps,
  isLoading,
  format,
  key,
  actionMenu,
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
            {actionMenu && actionMenu.length > 0 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => (
            <tr key={(dt as AnyObject)?.[key]}>
              {Children.toArray(
                format?.map((f) => {
                  if (f.customRender) return <td>{f?.customRender(dt)}</td>;
                  return <td>{String(get(dt, f.colKey, f.defaultValue ?? ""))}</td>;
                }),
              )}
              {actionMenu && actionMenu.length > 0 && (
                <td>
                  <Menu position="bottom-end" shadow="md" width={100}>
                    <Menu.Target>
                      <span className="block text-center w-16">
                        <FaEllipsisH />
                      </span>
                    </Menu.Target>
                    <Menu.Dropdown>
                      {Children.toArray(
                        actionMenu.map((a) => (
                          <Menu.Item onClick={() => a.onClick(dt)} p="xs">
                            {a.label}
                          </Menu.Item>
                        )),
                      )}
                    </Menu.Dropdown>
                  </Menu>
                </td>
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
