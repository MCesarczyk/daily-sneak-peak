import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ChildData from "../views/child/ChildData";
import ChildrenList from "../views/children/ChildrenList";

const Paths = () => (
            <Routes>
                <Route path='/' element={<Navigate replace to='/children' />} />
                <Route path='/children' element={<ChildrenList />} />
                <Route path='/children/:id' element={<ChildData />} />
            </Routes>
);

export default Paths;