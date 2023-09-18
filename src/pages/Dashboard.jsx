import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div>
        <ProductGrid />

      </div>

    </div>
  );
};

export default Dashboard;
