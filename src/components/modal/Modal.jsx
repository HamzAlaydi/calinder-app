import React, { useContext, useCallback } from "react";
import { Modal, Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
//context
import { ShowModal } from "../../utils/context/showModal";
//styles
import "./modal.css";
const ModalC = () => {
  //context
  const [showModal, setShowModal] = useContext(ShowModal);
  const [modalData] = useContext(ShowModal);

  //functions

  const handleOk = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleCancel = useCallback(() => {
    setShowModal(false);
  }, []);

  //form functions
  const { control, handleSubmit } = useForm({
    defaultValues: {
      note: "",
    },
  });

  //localStorge Functions

  const onSubmit = useCallback((data) => {
    localStorage.setItem(modalData.date, JSON.stringify(data));
    console.log(data);
  });

  const showDate = useCallback(() => {
    if (localStorage.getItem(modalData.date)) {
      let localData = localStorage.getItem(modalData.date);
      localData = JSON.parse(localData);
      return localData.note;
    } else {
      return null;
    }
  });

  console.log("test");
  const handleDelete = useCallback(() => {
    localStorage.removeItem(`${modalData.date}`);
  }, []);

  return (
    <>
      <Modal
        title={modalData ? modalData.date : "Modale"}
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalData ? (
          <p>
            <span className="bold-span"> Your Notes </span>
            {showDate()}
          </p>
        ) : null}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="note"
            control={control}
            render={({ field }) => (
              <Input value="" placeholder="Add One Note Here..." {...field} />
            )}
          />
          <div className="modal-btn">
            <button type="submit">Submit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default ModalC;
