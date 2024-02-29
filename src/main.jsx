import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuariosDommy from './components/UsuariosDommy.jsx';
import ProductosDommy from './components/ProductosDommy.jsx';
import LayaoutRoutes from './components/LayaoutRoutes.jsx';
import UsuariosINFO from './components/UsuariosINFO.jsx';
import ProductosINFO from './components/ProductosINFO.jsx';
import Home from './components/Home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<LayaoutRoutes></LayaoutRoutes>}>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='usuarios' element={<UsuariosDommy></UsuariosDommy>}>
          <Route path=':id' element={<UsuariosINFO></UsuariosINFO>}></Route>



        </Route>
        <Route path='productos' element={<ProductosDommy></ProductosDommy>}></Route>
        <Route path='productos/:id' element={<ProductosINFO></ProductosINFO>}></Route>




      </Route>


    </Routes>
  </BrowserRouter>



)
