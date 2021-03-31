import React from "react";
import LayoutContainer from "../components/LayoutContainer";

export default {
  title: "general/LayoutContainer",
  component: LayoutContainer,
};

export const Wide = () => (
  <LayoutContainer size="wide">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
    harum velit itaque! Cupiditate vel voluptatum soluta non distinctio libero
    tempore praesentium deserunt asperiores voluptas repudiandae cumque
    consequatur, numquam pariatur.
  </LayoutContainer>
);

export const Medium = () => (
  <LayoutContainer size="medium">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
    harum velit itaque! Cupiditate vel voluptatum soluta non distinctio libero
    tempore praesentium deserunt asperiores voluptas repudiandae cumque
    consequatur, numquam pariatur.
  </LayoutContainer>
);

export const Normal = () => (
  <LayoutContainer>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati
    harum velit itaque! Cupiditate vel voluptatum soluta non distinctio libero
    tempore praesentium deserunt asperiores voluptas repudiandae cumque
    consequatur, numquam pariatur.
  </LayoutContainer>
);
