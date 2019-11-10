import { Typography } from "antd";
import CreditCard from "./creditCard/index";
import Tilt from "react-tilt";
const { Title } = Typography;

export default () => (
  <div>
    <Title style={{ textAlign: "center", paddingTop: "20px" }}>
      Introducing the Breadit Card
    </Title>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Tilt
        className="Tilt"
        options={{ max: 30 }}
        style={{
          height: 190,
          width: 320,
          padding: "30px 0"
        }}
      >
        <div className="Tilt-inner">
          <CreditCard />
        </div>
      </Tilt>
    </div>
  </div>
);
