import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Layout = lazy(() => import("./layouts/windows/layout"));
const ChatPage = lazy(() => import("./pages/chat/index"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Layout loading"} >
        <Layout>
          <Suspense fallback={"loading"}>
            <Routes>
              <Route path="/" element={<Navigate to={"/chats"} />} />
              <Route path="/chats" element={<ChatPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
