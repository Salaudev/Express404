import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper";

const Header = ({ setOpen, ...props }) => {
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  return (
    <HeaderWrapper className="pt-3 container">
      <div className="row">
        <div className="col-3">
          <div className="d-flex justify-content-start align-items-center">
            <img
              src="https://express24.uz/img/header-logo.svg"
              width="160px"
              alt="express24"
            />
          </div>
        </div>
        <div className="col-6 ps-5">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              {...props}
            />
          </form>
        </div>
        <div className="col-3">
          {(userData.uid && (
            <button
              onClick={() => {
                navigate("/admin");
              }}
              className="styledBtn"
            >
              <FontAwesomeIcon icon="fa-solid fa-circle-user" />
              {userData.fullName}
            </button>
          )) || (
            <button
              className="styledBtn"
              onClick={() => {
                setOpen(true);
                navigate("/signin");
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
              Kirish
            </button>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
