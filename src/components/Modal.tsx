import React, { useEffect, useState } from "react";
import { Box, Flex } from "ticeboxes";
import Card from "./Card";
import styled from "styled-components";
import wait from "../utils/wait";

interface ModalProps {
  appear?: boolean;
  onToggle?: () => void;
  toggleOnClickOutside?: boolean;
}

const ClickLayer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div<ModalProps>`
  transition: transform, 300ms ease-out, opacity 200ms ease-out;
  transform: translateY(${({ appear }) => (appear ? -4 : 0)}px);
  opacity: ${({ appear }) => (appear ? 1 : 0)};
`;

const Modal: React.FC<ModalProps> = ({
  children,
  onToggle,
  toggleOnClickOutside = true,
  appear = false,
}) => {
  const [clickLayer, setClickLayer] = useState(false);
  const [modalAppear, setModalAppear] = useState(false);

  const handleAppear = async () => {
    if (appear) {
      setClickLayer(true);
      await wait(200);
      setModalAppear(true);
    } else if (clickLayer) {
      setModalAppear(false);
      await wait(200);
      setClickLayer(false);
    }
  };

  useEffect(() => {
    handleAppear();
  }, [appear]);

  const handleClickLayerToggle = (e: any) => {
    if (e.target.id === "modal-click-layer" && toggleOnClickOutside) {
      if (onToggle) onToggle();
    }
  };

  return clickLayer ? (
    <ClickLayer onClick={handleClickLayerToggle}>
      <Flex
        justify-content="center"
        align-items="center"
        h-100
        id="modal-click-layer"
      >
        <ModalWrapper appear={modalAppear} className="mb-5">
          <Card>
            <Box p="3">{children}</Box>
          </Card>
        </ModalWrapper>
      </Flex>
    </ClickLayer>
  ) : null;
};

export default Modal;
