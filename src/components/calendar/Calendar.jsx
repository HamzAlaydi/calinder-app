import React, { useContext, useMemo } from "react";
import { Button, Calendar } from "antd";

//context
import { ShowModal } from "../../utils/context/showModal";

//styles
import "./calendar.css";

const CalendarC = () => {
  //contexts
  const [, setShowModal] = useContext(ShowModal);
  const [, setModalData] = useContext(ShowModal);

  //functions

  //on change from useMemo to useCallBack the button will not be presinted :(
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
