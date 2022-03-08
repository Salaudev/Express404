import {
  faArrowAltCircleDown,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setUserData, signOutUser } from "../../firebase/functions";

export default function Profile() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: userData || {},
  });
  const submit = (data) => {
    setUserData(data, data.uid);
  };
  const signOut = () => {
    signOutUser((data) => console.log(data));
    navigate("/");
  };
  return (
    <ProfileWrapper className="py-5">
      <h3 className="mb-4 mt-3 d-flex justify-content-between">
        Profile{" "}
        <button className="signOut" onClick={signOut}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} /> Sign Out
        </button>
      </h3>
      <div className="row justify-content-around py-4">
        <div className="col-md-4 col-sm-6 me-4">
          <h4 className="">Ma'lumot  <span className="role">({userData.role})</span></h4>

          <div className="info py-3">
            <h5 className="text-center">+ {userData.phone}</h5>

            <form onSubmit={handleSubmit(submit)}>
              <div className="row mb-5">
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control w-100"
                    placeholder="To'liq ismingiz"
                    {...register("fullName", { required: true })}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    className="form-control w-100"
                    placeholder="Manzilingiz"
                    type={"text"}
                    {...register("location", { required: true })}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control w-100"
                    type={"number"}
                    placeholder="Yoshingiz"
                    {...register("age", { required: true })}
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="w-100 btn styledBtn" type="submit">
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <h4>Bonuslar</h4>

          <div className="bonuses py-3">
            <h5 className="text-center">Joriy Balans</h5>

            <div className="joriy d-flex py-3 align-items-center">
              <FontAwesomeIcon className="ballCup" icon={faTrophy} />
              <h5 className="ms-3 mb-0">{userData.ball || 0} ball</h5>
            </div>

            <h5 className="text-center mt-4">Keshbek</h5>

            <div className="joriy d-flex py-3 align-items-center">
              <p className="text-secondary">
                {userData.keshbek || "Sizda hozircha keshbek mavjud emas"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  .ballCup {
    font-size: 50px;
  }
  .signOut {
    border: none;
    outline: none;
    background: none;
    color: orange;
    font-size: 18px;
    font-weight: bold;
  }
  .role{
      font-size: 18px;
      color: orange;
  }
`;
