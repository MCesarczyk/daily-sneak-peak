import React from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "../../../dialogSlice";

const Navigation = ({ maxPage }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const decreasePage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const increasePage = () => {
    if (page < maxPage) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <Wrapper justify="space-between" >
      <Button variant="outlined" onClick={decreasePage} >
        Back
      </Button>
      {page + '/' + maxPage}
      <Button variant="outlined" onClick={increasePage} >
        Next
      </Button>
    </Wrapper>
  )
};

export default Navigation;