import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItemIndex, setItemIndex } from "../../views/child/childSlice";
import { Button } from "@mui/material";
import { Space } from "../Space";

const Pager = ({ content, minIndex, maxIndex }) => {
  const dispatch = useDispatch();
  const itemIndex = useSelector(selectItemIndex);

  const gotoMin = () => {
    if (itemIndex > minIndex) {
      dispatch(setItemIndex(minIndex));
    }
  };

  const increaseIndex = () => {
    if (itemIndex < maxIndex) {
      dispatch(setItemIndex(itemIndex + 1));
    }
  };

  const decreaseIndex = () => {
    if (itemIndex > minIndex) {
      dispatch(setItemIndex(itemIndex - 1));
    }
  };

  const gotoMax = () => {
    if (itemIndex < maxIndex) {
      dispatch(setItemIndex(maxIndex));
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