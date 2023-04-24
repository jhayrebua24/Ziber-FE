import { ReactNode } from "react";
import { TableProps } from "@mantine/core";
import { AnyObject } from "common/types";

export interface TableFormatType<T = AnyObject> {
  label?: string;
  colKey: string;
  defaultValue?: string | number;
  customRender?: (val: T) => ReactNode;
}

export interface TableActionMenu<T = AnyObject> {
  label: string | JSX.Element;
  onClick: (val: T) => void;
}

export interface TableType<T = AnyObject> {
  data: T[];
  key: string;
  tableProps?: TableProps;
  isLoading?: boolean;
  format: Array<TableFormatType<T>>;
  actionMenu?: Array<TableActionMenu<T>>;
}
