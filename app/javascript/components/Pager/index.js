import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Space } from "../Space";

const Pager = ({ content, minIndex, maxIndex, selectIndex, setIndex }) => {
  const dispatch = useDispatch();
  const itemIndex = useSelector(selectIndex);

  const gotoMin = () => {
    if (itemIndex > minIndex) {
      dispatch(setIndex(minIndex));
    }
  };

  const increaseIndex = () => {
    if (itemIndex < maxIndex) {
      dispatch(setIndex(itemIndex + 1));
    }
  };

  const decreaseIndex = () => {
    if (itemIndex > minIndex) {
      dispatch(setIndex(itemIndex - 1));
    }
  };

  const gotoMax = () => {
    if (itemIndex < maxIndex) {
      dispatch(setIndex(maxIndex));
    }
  };

  return (
    <Space align="center" justify="center" style={{ width: "100%" }} >
      <Button onClick={gotoMax} >{"<<"}</Button>
      <Button onClick={increaseIndex} >{"<"}</Button>
      {content}
      <Button onClick={decreaseIndex} >{">"}</Button>
      <Button onClick={gotoMin} >{">>"}</Button>
    </Space>
  )
};

export default Pager;