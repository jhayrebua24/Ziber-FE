import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import { UserProfile } from "apps/portal/auth/types";
import { Layout } from "common/components/layout";
import { Table } from "common/components/table";
import { TableActionMenu, TableFormatType } from "common/components/table/types";

import { useGetUsers } from "./hooks";

const tableFormat: TableFormatType[] = [
  {
    label: "No",
    colKey: "id",
  },
  {
    label: "First name",
    colKey: "first_name",
  },
  {
    label: "Last name",
    colKey: "last_name",
  },
  {
    label: "Email",
    colKey: "email",
  },
  {
    label: "Organization",
    colKey: "organization.name",
  },
  {
    label: "Role",
    colKey: "role.role",
  },
  {
    label: "Created at",
    colKey: "created_at",
    defaultValue: "-",
  },
];

const actionMenu: TableActionMenu[] = [
  {
    label: "Edit",
    onClick: () => {
      //
    },
  },
  {
    label: "Delete",
    onClick: () => {
      //
    },
  },
];

function UsersContainer() {
  const [data, isLoading] = useGetUsers();
  const nav = useNavigate();

  return (
    <Layout title="Users">
      <div className="container mx-auto mt-12">
        <Button onClick={() => nav("/")} color="teal" className="mb-4">
          Back
        </Button>
        <Table<UserProfile>
          actionMenu={actionMenu}
          format={tableFormat}
          data={data}
          isLoading={isLoading}
          tableProps={{
            withBorder: true,
          }}
        />
      </div>
    </Layout>
  );
}

export default UsersContainer;
