import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-4">
              <div className="d-flex justify-content-between gap-2 ">
                <div className="d-flex align-items-center flex-column">
                  <p>Ⓒ 2021 Express404</p>
                  <div className="messengers d-flex align-items-center gap-3">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex gap-3 flex-wrap  justify-content">
                <a href="#">О нас</a>
                <a href="#">Пользовательское соглашение</a>
                <a href="#">Контакты</a>
                <a href="#">Вопросы и ответы</a>
                <a href="#">Заявка на сотрудничество</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button className="dropdown-item" type="button">
                    English
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Русский
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    O'zbekcha
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
