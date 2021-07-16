import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="existing inventory"
        backgroundImg="model-s.jpg"
        id="model_s"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="existing inventory"
        backgroundImg="model-3.jpg"
        id="model_3"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="existing inventory"
        backgroundImg="model-x.jpg"
        id="model_x"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="existing inventory"
        backgroundImg="model-y.jpg"
        id="model_y"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="order now"
        rightBtnText="learn more"
        backgroundImg="solar-panel.jpg"
        id="panel"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="order now"
        rightBtnText="learn more"
        backgroundImg="solar-roof.jpg"
        id="roof"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
        backgroundImg="accessories.jpg"
        id="acc"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
