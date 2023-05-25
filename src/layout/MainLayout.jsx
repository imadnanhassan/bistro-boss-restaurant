import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sheard/Header';
import Footer from '../sheard/Footer';

const MainLayout = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;