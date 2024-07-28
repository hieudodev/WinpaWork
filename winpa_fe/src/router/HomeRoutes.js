import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Login from "../page/login/Login";
import Home from "../page/home/Home";

const routes = [
    {
        path: "/",
        component: Home ,
    },
    {
        path: "/login",
        component: Login,
    }
]
export default routes;

