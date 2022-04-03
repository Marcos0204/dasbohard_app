import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const currentAuth = false;

  const RequeriAuth = ({children}) => {
    return currentAuth ? { children } : <Navigate to='/login' />
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
              <RequeriAuth>
                <Home />
              </RequeriAuth>
            }
            />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={
                <RequeriAuth>
                  <Single />
              </RequeriAuth>
              } />
              <Route
                path="new"
                element={
                <RequeriAuth>
                   <New inputs={userInputs} title="Add New User" />
                </RequeriAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route index element={
                <RequeriAuth>
                  <List />
                </RequeriAuth>}
              />
              <Route path=":productId" element={
                <RequeriAuth>
                  <Single />
                </RequeriAuth>
              } />
              <Route
                path="new"
                element={
                <RequeriAuth>
                  <New inputs={productInputs} title="Add New Product" />
                 </RequeriAuth>
              }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
