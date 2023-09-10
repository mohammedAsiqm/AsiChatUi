import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";

const Layout = lazy(() => import("./layouts/windows/layout"));
const ChatPage = lazy(() => import("./pages/chat/index"));
const FeedsPage = lazy(() => import("./pages/feeds"));
const ExplorePage = lazy(() => import("./pages/explore"));
const ViewProfilePage = lazy(() => import("./pages/explore/viewProfile"));
const MyProfilePage = lazy(() => import("./pages/settings/profile"));
const LoginPage = lazy(() => import("./pages/login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Layout loading"}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>

        <Suspense fallback={"loading"}>
          <Routes>
            <Route
              Component={() => {
                return JSON.parse(sessionStorage.getItem("isLoggedIn")) ? (
                  <Layout>
                    <Outlet />
                  </Layout>
                ) : (
                  <Navigate to={"/"} />
                );
              }}
            >
              <Route path="/feeds" element={<FeedsPage />} />
              <Route path="/chats" element={<ChatPage />} />
              <Route path="/explores" element={<ExplorePage />} />
              <Route path="/viewprofile" element={<ViewProfilePage />} />
              <Route path="/myprofile" element={<MyProfilePage />} />
            </Route>
          </Routes>
        </Suspense>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
