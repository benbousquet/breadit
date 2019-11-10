import { Typography, Input, Button } from "antd";
const { Title, Paragraph } = Typography;

export default () => (
  <div
    style={{
      padding: "80px 0",
      backgroundColor: "white",
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div style={{ width: "50%" }}>
      <div>
        <Title>Interested?</Title>
        <Paragraph style={{ fontSize: "18px" }}>
          Enter your email to recieve information as we release them 😊
        </Paragraph>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Input size="large" placeholder="Email" />
        <Button size="large" type="primary">
          Sign Up
        </Button>
      </div>
    </div>
  </div>
);
