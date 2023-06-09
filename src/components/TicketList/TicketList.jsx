import { v4 as uuidv4 } from 'uuid';

import TicketContainer from '../Ticket/TicketContainer';
import Loader from '../CustomComponents/Loader';

const TicketList = (props) => {
  const loadMore = () => {
    props.loadMoreTickets();
  };
  return (
    <div className="tickets-container">
      {!props.LoadingComplete && <Loader />}
      <div className="tickets">
        {props.ShowTickets.slice(0, props.LoadedCount).map((ticket, index) => (
          <TicketContainer key={uuidv4()} Ticket={ticket} />
        ))}
      </div>
      {props.ShowTickets.length > 5 && (
        <button className="load_more" onClick={() => loadMore()}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  );
};

export default TicketList;
