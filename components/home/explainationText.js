import { Typography, Row } from "antd";
const { Title, Paragraph } = Typography;
export default () => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%"
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "25%"
        }}
      >
        <Title>
          Gain the availablity of a Creditcard but with all the requirements
        </Title>
        <Paragraph style={{ fontSize: "18px" }}>
          The Breadit Card lets you get instant cash to use without needing a
          creditscore and retains the same availablity
        </Paragraph>
      </div>
      <img src="/stock1.png" />
    </div>
  </div>
);
