import React, { useEffect, useState } from "react";
import { Box } from "ticeboxes";
import PosAbsoluteAnimated from "../components/wizard/PosAbsoluteAnimated";
import WizardCard from "../components/wizard/WizardCard";

export default {
  title: "General/Wizard",
};

export const Card = () => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppear(true), 800);
  }, []);

  const [hideContent, setHideContent] = useState(false);

  useEffect(() => {
    setInterval(() => setHideContent((prevState) => !prevState), 2000);
  }, []);

  return (
    <>
      <Box mb="4">
        <WizardCard text="This is a card" />
      </Box>
      <Box mb="4">
        <WizardCard isButtonActive={false} text="This is a card" />
      </Box>
      <Box mb="4">
        <WizardCard hideButton text="This is a card" />
      </Box>
      <Box mb="4">
        <WizardCard buttonPlacement="center" text="This is a card" />
      </Box>
      <Box mb="4">
        <WizardCard appear={appear} text="Appear animation" />
      </Box>
      <Box mb="4">
        <WizardCard hideContent={hideContent} text="Hide and show content" />
      </Box>
    </>
  );
};

export const CardPlacement = () => {
  const steps = [
    { x: 8, y: 10 },
    { x: 100, y: 100 },
    { x: 90, y: 50 },
    { x: 0, y: 0 },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const { x, y } = steps[currentStep];

  useEffect(() => {
    setTimeout(() => {
      setCurrentStep(1);
    }, 500);
    setTimeout(() => {
      setCurrentStep(2);
    }, 1500);
    setTimeout(() => {
      setCurrentStep(3);
    }, 3000);
  }, []);

  return (
    <PosAbsoluteAnimated x={x} y={y}>
      <WizardCard text="This is a card" />
    </PosAbsoluteAnimated>
  );
};
