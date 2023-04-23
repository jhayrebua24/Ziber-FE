import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { Layout } from "common/components/layout";
import { Table } from "common/components/table";
import { TableFormatType } from "common/components/table/types";

import { useGetOrganizations } from "./hooks";

const tableFormat: TableFormatType[] = [
  {
    label: "Name",
    colKey: "name",
  },
  {
    label: "Description",
    colKey: "description",
  },
  {
    label: "Created at",
    colKey: "created_at",
  },
];

function OrganizationsContainer() {
  const [data, isLoading] = useGetOrganizations();
  const nav = useNavigate();

  return (
    <Layout title="Organizations">
      <div className="container mx-auto mt-12">
        <Button onClick={() => nav("/")} color="teal" className="mb-4">
          Back
        </Button>
        <Table format={tableFormat} data={data} isLoading={isLoading} />
      </div>
    </Layout>
  );
}

export default OrganizationsContainer;
