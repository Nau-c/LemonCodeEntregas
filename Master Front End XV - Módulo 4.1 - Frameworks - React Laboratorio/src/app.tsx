import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./list/ListPage";
import { LoginPage } from "./components/common/login";
import { DetailPage } from "./components/detail/detail";
export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/detail:id" element={<DetailPage />} />
            </Routes>
        </Router>
    )
};