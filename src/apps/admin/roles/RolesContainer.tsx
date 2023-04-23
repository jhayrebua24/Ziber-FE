import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { Layout } from "common/components/layout";
import { Table } from "common/components/table";
import { TableFormatType } from "common/components/table/types";

import { useGetRoles } from "./hooks";

const tableFormat: TableFormatType[] = [
  {
    label: "No",
    colKey: "id",
  },
  {
    label: "Role",
    colKey: "role",
  },
  {
    label: "Created at",
    colKey: "created_at",
  },
];

function RolesContainer() {
  const [data, isLoading] = useGetRoles();
  const nav = useNavigate();

  return (
    <Layout title="Roles">
      <div className="container mx-auto mt-12">
        <Button onClick={() => nav("/")} color="teal" className="mb-4">
          Back
        </Button>
        <Table format={tableFormat} data={data} isLoading={isLoading} />
      </div>
    </Layout>
  );
}

export default RolesContainer;
