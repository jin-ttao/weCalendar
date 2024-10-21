import Sidebar from "../UI/Sidebar";
import CalendarCheckList from "../Calendar/CalendarCheckList";
import MainArea from "../UI/MainArea";
import Monthly from "./Monthly";
import NewEventButton from "../Button/NewEventButton";

function Calendar() {
  return (
    <div className="flex">
      <Sidebar>
        <CalendarCheckList />
      </Sidebar>
      <MainArea>
        <Monthly />
        <NewEventButton />
      </MainArea>
    </div>
  );
}

export default Calendar;
