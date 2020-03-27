import * as React from "react";
import { DisplaySmall } from "baseui/typography";
import { Table } from "baseui/table";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const GlobalState = () => {
  const { users } = useSelector((state) => state.users);
  const data = useMemo(
    () =>
      users.map((user) => {
        return [user.firstName, user.lastName, user.email];
      }),
    [users]
  );
  return (
    <div style={{ padding: 10 }}>
      <DisplaySmall>Global State</DisplaySmall>
      <Table columns={["First Name", "Last Name", "Email"]} data={data} />
    </div>
  );
};

GlobalState.displayName = "Global State";

export default GlobalState;
