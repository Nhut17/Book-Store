import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Listcate from "./Listcate";
import "./AdminCate.scss";
import { getAllCategories } from '../../../../redux/reducer/categorySlice'
import ListCate from "./ListCate";

function AdminCate(props) {
    const listCate = useSelector(state => state.category.listCate)

   

    return (
        <div className="admin-cate">
            <div className="admin-cate-link">

            {
                listCate.length
            }
                <Link to="/admin/category/create">
                    <button >
                        + Add Cate
                    </button>
                </Link>
            </div>

            {listCate &&
                <ListCate listCate={listCate} />
            }

        </div>
    );
}

export default AdminCate;
