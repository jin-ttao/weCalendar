import Sidebar from "../UI/Sidebar";
import MainArea from "../UI/MainArea";
import CalendarCheckList from "../Calendar/CalendarCheckList";
import NewEventButton from "../Button/NewEventButton";

function Calendar() {
  return (
    <>
      <Sidebar>
        <CalendarCheckList />
      </Sidebar>
      <MainArea>
        <NewEventButton />
      </MainArea>
    </>
  );
}

export default Calendar;
