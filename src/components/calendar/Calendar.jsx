import React, { useCallback, useContext, useMemo } from "react";
import { Button, Calendar } from "antd";

//context
import { ShowModal } from "../../utils/context/showModal";

//styles
import "./calendar.css";

const CalendarC = () => {
  //contexts
  const [showModal, setShowModal] = useContext(ShowModal);
  const [modalData, setModalData] = useContext(ShowModal);

  //functions

  //11
  const dataCell = useMemo(
    () => (value) => {
      const handleClick = () => {
        console.log(value.format("YYYY-MM-DD"));
        setShowModal(true);
        setModalData({ date: value.format("YYYY-MM-DD") });
      };
      return (
        <div>
          <Button onClick={handleClick}>+</Button>
        </div>
      );
    },
    []
  );

  return (
    <div className="calendar">
      <Calendar dateCellRender={dataCell} />
    </div>
  );
};

export default CalendarC;
