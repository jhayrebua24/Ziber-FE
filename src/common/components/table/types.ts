import { TableProps } from "@mantine/core";
import { AnyObject } from "common/types";

export interface TableFormatType {
  label?: string;
  colKey: string;
  defaultValue?: string | number;
}

export interface TableType<T = AnyObject> {
  data: T[];
  key: string;
  tableProps?: TableProps;
  isLoading?: boolean;
  format: TableFormatType[];
}
