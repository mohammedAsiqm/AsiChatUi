import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Layout = lazy(() => import("./layouts/windows/layout"));
const ChatPage = lazy(() => import("./pages/chat/index"));
const FeedsPage = lazy(() => import("./pages/feeds"));
const ExplorePage = lazy(() => import("./pages/explore"));
const ViewProfilePage = lazy(() => import("./pages/explore/viewProfile"));
const MyProfilePage = lazy(() => import("./pages/settings/profile"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Layout loading"}>
        <Layout>
          <Suspense fallback={"loading"}>
            <Routes>
              <Route path="/" element={<Navigate to={"/feeds"} />} />
              <Route path="/feeds" element={<FeedsPage />} />
              <Route path="/chats" element={<ChatPage />} />
              <Route path="/explores" element={<ExplorePage />} />
              <Route path="/viewprofile" element={<ViewProfilePage />} />
              <Route path="/myprofile" element={<MyProfilePage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
