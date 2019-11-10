import { Typography, Row } from "antd";
const { Title, Paragraph } = Typography;
export default () => (
  <div
    style={{
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
      <img src="/stock2.png" />

      <div
        style={{
          width: "25%"
        }}
      >
        <Title>Got some extra cash? Invest it over time</Title>
        <Paragraph>
          Breadit allows you to loan money to other people though microloans.
          Let your money increase overtime with no effort at all!
        </Paragraph>
      </div>
    </div>
  </div>
);
