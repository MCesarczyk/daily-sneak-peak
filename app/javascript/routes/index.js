import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChildData from "../views/child/ChildData";
import ChildrenList from "../views/children/ChildrenList";

const Router = ({ children }) => (
    <BrowserRouter>
        {children}
        <Routes>
            <Route path='/' element={<Navigate replace to='/children' />} />
            <Route path='/children' element={<ChildrenList />} />
            <Route path='/children/:id' element={<ChildData />} />
        </Routes>
    </BrowserRouter>
);

export default Router;