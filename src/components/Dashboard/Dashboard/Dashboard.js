import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const Dashboard = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
      return (
        <div className="flex justify-center h-[500px] items-center">
          <div
            className="animate-spin  radial-progress text-primary"
            style={{ "--value": 80 }}
          ></div>
        </div>
      );
    }
    return (
      <div>
        This is Dash board
        <div className="flex justify-center h-[500px] items-center">
          <div
            className="animate-spin  radial-progress text-primary"
            style={{ "--value": 80 }}
          >
          </div>
        </div>
      </div>
    );
};

export default Dashboard;