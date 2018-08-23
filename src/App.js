import React, { Component } from 'react';
import logo from './logo.svg';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import config from "./helper/config";
import './App.css';
import Api, { apiService } from "./service/api";
import Map from "./mapRoot/mapComponent";
const App = () => (
   <Admin dataProvider={simpleRestProvider(config.endPoint)}>
    <Resource name="mapData" list={Map} />
   </Admin>
)

export default App;
