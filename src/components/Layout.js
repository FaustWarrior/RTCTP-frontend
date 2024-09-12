import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>Task Management Platform</h1>
      </header>
      <main>{children}</main>
      <footer className="footer">© 2024 Task Management Platform</footer>
    </div>
  );
};

export default Layout;
