import React, { useEffect, useRef, useState } from "react";
import useDocumentClickListener from "../../hooks/useDocumentClickListener";
import {
  TransparentInput,
  TransparentInputFontType,
  TransparentSpan,
} from "./Form";

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  initialValue: string;
  onSubmit: (value: string) => void;
  font?: TransparentInputFontType;
  type?: "date";
}

const TransformToInputWrapper: React.FC<Props> = ({
  children,
  initialValue,
  font,
  onSubmit,
  type,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState<string>(initialValue);
  const [isOpen, setOpen] = useState(false);

  const { e } = useDocumentClickListener();

  useEffect(() => {
    if (isOpen) {
      const elem = e!.target as HTMLElement;
      if (!["P", "H4", "BUTTON", "INPUT"].includes(elem.tagName)) {
        onSubmit(value);
        setOpen(false);
      }
    }
  }, [e]);

  useEffect(() => {
    if (isOpen) {
      const width = spanRef.current!.offsetWidth + (type === "date" ? 60 : 5);
      inputRef.current!.style.width = `${width}px`;
    }
  }, [value, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(value);
      setOpen(false);
    }
  };

  return isOpen ? (
    <>
      <TransparentInput
        ref={inputRef}
        type={type || "text"}
        font={font}
        value={value}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <TransparentSpan ref={spanRef}>{value}</TransparentSpan>
    </>
  ) : (
    <div className="d-flex align-items-center" onClick={() => setOpen(true)}>
      {children}
    </div>
  );
};

export default TransformToInputWrapper;
