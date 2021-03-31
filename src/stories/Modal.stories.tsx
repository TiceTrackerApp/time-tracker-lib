import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default {
  title: "General/Modal",
  component: Modal,
};

export const Example = () => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppear(true), 2000);
  }, []);

  return <Modal appear={appear}>Hi there</Modal>;
};
