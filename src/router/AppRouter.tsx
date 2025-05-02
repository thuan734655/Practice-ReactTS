import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
const AppRouter: React.FC = () => {

  const routes = useRoutes([
   {}
   /* demo  routes
   {
      path: "/dashboard",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/",
      element: <SignIn {...authController} signInData={signInData} />,
    },
   */
  ]);

  return <Router>{routes}</Router>;
};

export default AppRouter;