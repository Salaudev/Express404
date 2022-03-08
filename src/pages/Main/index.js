import React, { useContext, useState, useEffect } from "react";
import Title from "../../components/Title";
import Wrapper from "./MainWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import KorzinaMini from "../../components/KorzinaMini/KorzinaMini";
import Choose from "../../components/Choose";
import Modal from "../../components/Modal";
import Footer from "../../components/footer/Footer";
import SignIn from "../../Login/SignIn";
import SignUp from "../../Login/SignUp";
import { useSelector } from "react-redux";
import { pushProductToKorzina } from "../../firebase/functions";
import AlertMini from "../../components/Alert";

export default function Main() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [chooseProduct, setChooseProduct] = useState({});
  const [openKirish, setOpenKirish] = useState(true);
  const [alertOpen, setAlertOpen] = useState(true);

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const userData = useSelector((state) => state.userData);

  // console.log("baza===========", useSelector(state => state), "=============================")
  const korzinaObj = userData.korzina || {};
  const korzina = Object.values(korzinaObj);

  const changeSoni = (isPlus) => {
    const obj = { ...chooseProduct };
    if (isPlus) {
      obj.soni = chooseProduct.soni + 1;
    } else {
      if (chooseProduct.soni === 1) return;
      obj.soni = chooseProduct.soni - 1;
    }
    setChooseProduct(obj);
  };

  const addProductToKorzina = (obj) => {
    if (userData.uid) {
      pushProductToKorzina(obj, userData.uid);
    } else {
      navigate("/signin");
    }
  };
  const addChoose = (data) => {
    setChooseProduct(data);
    setOpen(true);
  };

  const Search = () => {
    console.log("search");
  };

  const productsArr = Object.entries(products);

  return (
    <Wrapper className="text-center">
      {/* <AlertMini open={alertOpen} setOpen={setAlertOpen} text={"Nimadir lorem ipsum dolor sit"}/> */}
      {korzina.length > 0 && (
        <KorzinaMini
          price={korzina.reduce(
            (first, item) => first + item.soni * item.price,
            0
          )}
          soni={korzina.length}
          click={() => navigate("korzina")}
        />
      )}
      <Modal open={open} setOpen={setOpen}>
        <Choose
          data={chooseProduct}
          addProductToKorzina={addProductToKorzina}
          changeSoni={changeSoni}
          setOpen={setOpen}
        />
      </Modal>
      <Routes>
        <Route
          path="/signin"
          element={
            <Modal open={openKirish} setOpen={setOpenKirish} isNavigate={true}>
              <SignIn />
            </Modal>
          }
        />
        <Route
          path="/signup"
          element={
            <Modal open={openKirish} setOpen={setOpenKirish} isNavigate={true}>
              <SignUp />
            </Modal>
          }
        />
      </Routes>
      <Wrapper className="text-center">
        <Header setOpen={setOpenKirish} onChange={() => {}} />
        <main className="mt-4">
          <img
            src="/images/express.png"
            className="image-fluid"
            alt="express"
          />
        </main>
        <div className="container py-4">
          <div className="d-flex row">
            {Object.values(categories).map((item, i) => (
              <a
                key={i + item}
                className=" tabBtn tabBtn2 col-md-2 col-lg-2 col-sm-4  mb-3"
                href={`#${item}`}
              >
                {item[0].toLocaleUpperCase() + item.slice(1).toLowerCase()}
              </a>
            ))}
          </div>
        </div>

        {productsArr.map((mass, j) => {
          const ProductsValues = Object.values(mass[1]);
          const ProductsName = mass[0];
          return (
            <div className="container" key={mass[0] + j}>
              <div className="row mt-5" key={j} id={ProductsName}>
                <h2 className="mb-3 text-start">
                  {ProductsName[0].toLocaleUpperCase() +
                    ProductsName.slice(1).toLowerCase()}
                </h2>

                {ProductsValues.map((item, index) => (
                  <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Card
                      {...item}
                      key={index}
                      remove={() =>
                        addChoose({
                          price: item.price,
                          soni: 1,
                          img: item.img,
                          name: item.productName,
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Wrapper>
      <Footer />
    </Wrapper>
  );
}
