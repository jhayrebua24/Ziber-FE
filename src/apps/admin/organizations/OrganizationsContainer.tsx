import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { Layout } from "common/components/layout";
import { useModalContext } from "common/components/modal";
import { Table } from "common/components/table";
import { TableFormatType } from "common/components/table/types";

import OrganizationsModal from "./components/OrganizationsModal";
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
  const openModal = useModalContext();
  const nav = useNavigate();

  const handleAdd = () => {
    openModal({
      title: "Create organization",
      render: (close) => <OrganizationsModal onClose={close} />,
    });
  };

  return (
    <Layout title="Organizations">
      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-between">
          <Button
            onClick={() => nav("/")}
            color="teal"
            variant="outline"
            className="mb-4"
          >
            Back
          </Button>
          <Button onClick={handleAdd} color="teal" className="mb-4">
            Add Organization
          </Button>
        </div>
        <Table format={tableFormat} data={data} isLoading={isLoading} />
      </div>
    </Layout>
  );
}

export default OrganizationsContainer;
