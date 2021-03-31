import React from "react";
import { Col, Container, Row } from "reactstrap";

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  size?: "normal" | "medium" | "wide";
  style?: React.CSSProperties;
  className?: string;
}

const LayoutContainer: React.FC<Props> = ({
  children,
  size = "normal",
  style,
  className,
}) => {
  const sizes = {
    wide: {
      sm: { size: 12 },
      md: { size: 12 },
      lg: { size: 12 },
    },
    medium: {
      sm: { size: 10, offset: 1 },
      md: { size: 8, offset: 2 },
      lg: { size: 8, offset: 2 },
    },

    normal: {
      sm: { size: 10, offset: 1 },
      md: { size: 8, offset: 2 },
      lg: { size: 6, offset: 3 },
    },
  };

  const { sm, md, lg } = sizes[size];

  return (
    <Container style={style}>
      <Row>
        <Col xs="12" sm={sm} md={md} lg={lg} className={className}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutContainer;
