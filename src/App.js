import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import CreateDashboard from "./pages/CreateDashboard";
import CreateFolder from "./pages/CreateFolder";
import CreateDatasource from "./pages/CreateDatasource";
import GetDashboards from "./pages/GetDashboards";
import GetDataSources from "./pages/GetDatasources";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="create-dashboard" element={<CreateDashboard />}></Route>
                    <Route path="create-datasource" element={<CreateDatasource />}></Route>
                    <Route path="create-folder" element={<CreateFolder />}></Route>
                    <Route path="create-datasource" element={<createDatasource />}></Route>
                    <Route path="get-dashboards" element={<GetDashboards />}></Route>
                    <Route path="get-datasources" element={<GetDataSources />}></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

