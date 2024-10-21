import Sidebar from "../UI/Sidebar";
import CalendarCheckList from "../Calendar/CalendarCheckList";
import MainArea from "../UI/MainArea";
import Monthly from "./Monthly";
import NewEventButton from "../Button/NewEventButton";

function Calendar() {
  return (
    <>
      <Sidebar>
        <CalendarCheckList />
      </Sidebar>
      <MainArea>
        <Monthly />
        <NewEventButton />
      </MainArea>
    </>
  );
}

export default Calendar;
