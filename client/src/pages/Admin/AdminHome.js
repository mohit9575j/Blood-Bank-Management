import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to the Admin Dashboard of the Blood Bank Application. As an administrator, you play a crucial role in managing and overseeing the entire system. Your responsibilities include managing donor information, overseeing hospital records, and handling organization profiles. You can view, add, and update donor details, ensuring that all data is accurate and up-to-date. Additionally, you will oversee hospital records, manage their registration and updates, and coordinate smoothly with them. You will also handle organization profiles, monitor their interactions with the system, and ensure that all organizational data is correctly maintained. Furthermore, you are responsible for tracking blood inventory levels, and generating detailed reports on various aspects of the system. Your role ensures the smooth operation and efficiency of the Blue Bank Application, and we appreciate your dedication and efforts in maintaining the system’s integrity.


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
