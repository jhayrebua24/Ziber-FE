import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { ContainerWrapper, Layout } from "common/components/layout";
import { Table } from "common/components/table";
import { TableFormatType } from "common/components/table/types";

import { useGetModules } from "./hooks";

const tableFormat: TableFormatType[] = [
  {
    label: "No",
    colKey: "id",
  },
  {
    label: "Module",
    colKey: "module",
  },
  {
    label: "Created at",
    colKey: "created_at",
  },
];

function ModulesContainer() {
  const [data, isLoading] = useGetModules();
  const nav = useNavigate();

  return (
    <Layout title="Modules">
      <ContainerWrapper>
        <div>
          <Button onClick={() => nav("/")} color="teal" className="mb-4">
            Back
          </Button>
        </div>
        <Table format={tableFormat} data={data} isLoading={isLoading} />
      </ContainerWrapper>
    </Layout>
  );
}

export default ModulesContainer;
