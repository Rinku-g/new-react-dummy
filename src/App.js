import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import PageLoading from "./componants/PageLoading";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, element: Element, layout: Layout } = route;
        const element = (
          <Layout>
            <Element />
          </Layout>
        );
        return <Route exact key={index} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default App;
