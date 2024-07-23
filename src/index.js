import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './icons/AwesomeLibrary';
import Nav from "./components/nav/Nav";
import Home from "./components/pages/Home";
import List from "./components/pages/list/List";
import Items from "./components/pages/list/Items";
import ItemPage from "./components/pages/list/ItemPage";
import Admin from "./components/pages/admin/Admin";
import NotFound from "./components/pages/NotFound";
import ItemPageMain from "./components/pages/list/ItemPageMain";
import ItemPageDescr from "./components/pages/list/ItemPageDescr";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
            <BrowserRouter>
                <Provider store={store}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<App/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"list"} element={<List/>}>
                            <Route path={":itemId"} element={<ItemPage/>}>
                                <Route path={"descr"} element={<ItemPageDescr/>}/>
                                <Route index element={<ItemPageMain/>}/>
                            </Route>
                            <Route index element={<Items/>}/>
                        </Route>
                        <Route path={"admin"} element={<Admin/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>

                </Provider>
            </BrowserRouter>

);


