import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

// Finance-related imports
import CouponWall from '../finance/CouponWall';
import ClientPay from '../finance/ClientPay';
import OnlinePay from '../finance/OnlinePay';
import PaySuccess from '../finance/PaySuccess';
import PaymentSummary from '../finance/PaymentSummary';
import DashboardApp from '../finance/dashboard/DashboardApp';

function Home() {
  const { pathname } = useLocation();

  // Hide hero section for sub-pages (payment or finance dashboard)
  const onSubPage = pathname.startsWith('/pay') || pathname.startsWith('/fm');

  return (
    <div style={{ padding: 16 }}>
      {/* -------- Hero Section (hidden on sub-pages) -------- */}
      {!onSubPage && (
        <>
          <h1>Welcome to Pet Care</h1>
          <p>Your one-stop solution for all pet care needs.</p>

          {/* (These h2/h3 look like debugging fun — keeping them here per your request 😄) */}
          <h2>Balla</h2>
          <h3>LOL</h3>

          {/* Navigation Buttons */}
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {/* Payment Link */}
            <Link
              to="/pay"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                background: '#FFD58E',
                color: '#54413C',
                borderRadius: 10,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,.08)',
              }}
            >
              Go to Payment
            </Link>

            {/* Finance Dashboard Link */}
            <Link
              to="/fm"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                background: '#54413C',
                color: '#FFFFFF',
                borderRadius: 10,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,.10)',
              }}
            >
              Open Finance Dashboard
            </Link>

            {/* Other Navigation Links */}
            <Link to="/daycare" className="active daycare">
              <h2>Daycare</h2>
            </Link>

            <Link to="/dashboardDC" className="active daycare">
              <h2>Daycare Dashboard</h2>
            </Link>

            <Link to="/inventory" className="Products">
              <h2>Products</h2>
            </Link>

            <Link to="/store" className="store">
              <h2>Store</h2>
            </Link>

            {/* CouponWall component rendered directly */}
            <CouponWall />
          </div>
        </>
      )}

      {/* -------- Sub-Pages Routes -------- */}
      <Routes>
        <Route path="/pay" element={<ClientPay />} />
        <Route path="/pay/online" element={<OnlinePay />} />
        <Route path="/pay/success" element={<PaySuccess />} />
        <Route path="/pay/summary" element={<PaymentSummary />} />
        <Route path="/fm/*" element={<DashboardApp />} />
      </Routes>
    </div>
  );
}

export default Home;