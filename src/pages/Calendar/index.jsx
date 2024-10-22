import Sidebar from "../../shared/UI/Sidebar";
import CalendarCheckList from "../../widgets/CalendarCheckList";
import MainArea from "../../shared/UI/MainArea";
import Monthly from "../../widgets/Monthly";
import NewEventButton from "../../shared/Button/NewEventButton";

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
