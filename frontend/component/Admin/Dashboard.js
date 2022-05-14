import React from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
 
  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
         
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Students</p>
              {/* <p>{products && products.length}</p> */}2
            </Link>
            <Link to="/admin/orders">
              <p>Results</p>
              {/* <p>{orders && orders.length}</p> */} 4
            </Link>
            <Link to="/admin/users">
              <p>Teachers</p>
              {/* <p>{users && users.length}</p>  */}  1
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
