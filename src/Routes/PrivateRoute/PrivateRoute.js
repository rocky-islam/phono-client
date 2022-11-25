import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // if (loading) {
    //   return (
    //     <div className='flex justify-center h-[500px] items-center'>
    //       <button className=" btn loading">loading...</button>
    //     </div>
    //   );
    // }
    if (loading) {
      return (
        <div className='flex justify-center h-[500px] items-center'>
          <div className="animate-spin radial-progress text-primary" style={{"--value":70}}>
            
          </div>
        </div>
      );
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;