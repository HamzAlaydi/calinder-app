import React, { createContext, useState } from "react";

export const ShowModal = createContext();

export const ShowModalProvider = (props) => {
  const [showModal, setShowModal] = useState();
  return (
    <ShowModal.Provider value={[showModal, setShowModal]}>
      {props.children}
    </ShowModal.Provider>
  );
};

export default ShowModalProvider;
