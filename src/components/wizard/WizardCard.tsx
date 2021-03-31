import React from "react";
import styled from "styled-components";
import { Box, Flex } from "ticeboxes";
import Card from "../Card";
import Button from "../Button";
import { P } from "../Typography";

type CardProps = {
  appear: boolean;
};

const CardWrapper = styled(Card)<CardProps>`
  max-width: 80vw;
  transition: transform, 300ms ease-out, opacity 200ms ease-out;
  transform: translateY(${({ appear }) => (appear ? -4 : 0)}px);
  opacity: ${({ appear }) => (appear ? 1 : 0)};
`;

export interface WizardCardProps {
  buttonPlacement?: "center" | "right";
  buttonText?: string;
  isButtonActive?: boolean;
  hideButton?: boolean;
  onClickButton?: () => void;
  appear?: boolean;
  hideContent?: boolean;
  text: string;
}

const WizardCard: React.FC<WizardCardProps> = ({
  buttonPlacement = "right",
  buttonText = "Next",
  isButtonActive = true,
  hideButton = false,
  onClickButton,
  appear = true,
  hideContent = false,
  text,
}) => {
  const buttonPositions = {
    right: "end",
    center: "center",
  };

  return (
    <CardWrapper id="wizardCard" appear={appear}>
      <Box
        pt="3"
        px="3"
        pb="1"
        style={{
          opacity: hideContent ? 0 : 1,
          transition: "opacity 150ms ease-out",
        }}
      >
        <Box mr={hideButton || buttonPlacement === "center" ? "0" : "4"}>
          <P>{text}</P>
        </Box>

        <Flex
          mt="2"
          justify-content={buttonPositions[buttonPlacement] as "center" | "end"}
        >
          {!hideButton ? (
            <Button
              onClick={onClickButton}
              transparent
              small
              disabled={!isButtonActive}
            >
              {buttonText}
            </Button>
          ) : null}
        </Flex>
      </Box>
    </CardWrapper>
  );
};

export default WizardCard;
