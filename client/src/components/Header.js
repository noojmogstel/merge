import React, { useState } from "react";
import logo from "../img/logo.png";
import menu from "../img/icons8-menu-rounded-50.png";
import noti from "../img/icons8-알림-30.png";
import Modal from "./MenuModal";
import styles from "./Header.module.css";
import TopicMenuModal from "./TopicMenumodal";

const Header = (props) => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showTopicMenuModal, setShowTopicMenuModal] = useState(false);

  const handleMenuClick = () => {
    setShowMenuModal(true);
  };

  const handleNotificationClick = () => {
    setShowNotificationModal(true);
  };

  const handlTopicMenuClick = () => {
    setShowTopicMenuModal(true);
  };

  const handleCloseModal = () => {
    setShowMenuModal(false);
    setShowNotificationModal(false);
    setShowTopicMenuModal(false);
  };

  return (
    <div className={styles.container}>
      {props.useButton ? (
        <img
          className={styles.menuIcon}
          src={menu}
          alt="menu"
          onClick={handleMenuClick}
        />
      ) : props.useTopicMenuButton ? (
        <img
          className={styles.menuIcon}
          src={menu}
          alt="menu"
          onClick={handlTopicMenuClick}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        onClick={() => {
          window.location.href = "/main";
        }}
      />

      {props.useButton ? (
        <img
          className={styles.notificationIcon}
          src={noti}
          alt="noti"
          onClick={handleNotificationClick}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
      {showMenuModal && (
        <Modal
          show={showMenuModal}
          onClose={handleCloseModal}
          title="Menu"
        ></Modal>
      )}
      {showNotificationModal && (
        <Modal
          show={showNotificationModal}
          onClose={handleCloseModal}
          title="Notification"
        ></Modal>
      )}
      {showTopicMenuModal && (
        <TopicMenuModal
          topicId={props.topicId}
          visible={props.visible}
          show={showTopicMenuModal}
          deleteTopic={props.deleteTopic}
          onClose={handleCloseModal}
          title="Topic Menu"
        ></TopicMenuModal>
      )}
    </div>
  );
};

export default Header;
