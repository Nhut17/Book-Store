import "./Admin.scss";
import AdminNavBar from "./AdminNavBar/AdminNavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadData = async () => {
    console.log("calling admin category api");
    
    

    dispatch(updateCategoryAction);
    dispatch(updateSubCategoryAction);
    dispatch(updateShopAction);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("role") === "ROLE_ADMIN") {
      loadData();
    } else if (window.sessionStorage.getItem("role") === "ROLE_USER")
      navigate("/");
    else navigate("/login");
  }, []);

  useEffect(() => {
    document.title = "Trang quản lý";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="admin">
      <AdminNavBar>
        <Outlet />
      </AdminNavBar>
    </div>
  );
}
