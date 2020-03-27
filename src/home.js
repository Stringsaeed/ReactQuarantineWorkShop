import * as React from "react";
import { styled } from "baseui";
import { Input } from "baseui/input";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexDirection: "column",
  width: "auto",
  // flex: 1,
});

const Home = () => {
  const [writeValue, setWriteValue] = React.useState("");
  return (
    <div style={{ flex: 9, padding: 10 }}>
      <Centered>
        <div style={{ width: 200, margin: 20 }}>
          <Input
            value={writeValue}
            onChange={(e) => setWriteValue(e.target.value)}
            placeholder="Controlled Input"
          />
        </div>
      </Centered>
    </div>
  );
};

Home.displayName = "home";

export default Home;
