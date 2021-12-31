import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import ChildData from "../views/child/ChildData";
import ChildrenList from "../views/children/ChildrenList";

const Router = ({ children }) => (
    <BrowserRouter>
        {children}
        <Wrapper>
            <Routes>
                <Route path='/' element={<Navigate replace to='/children' />} />
                <Route path='/children' element={<ChildrenList />} />
                <Route path='/children/:id' element={<ChildData />} />
            </Routes>
        </Wrapper>
    </BrowserRouter>
);

export default Router;