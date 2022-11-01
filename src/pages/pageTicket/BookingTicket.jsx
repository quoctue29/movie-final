import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingProvider } from "./booking-context";
import "./BookingTicket.scss";
import Ticket from "./Ticket";
import TicketChooseSeats from "./TicketChooseSeats";
const BookingTicket = () => {
  const param = useParams();
  const bookingId = param.id;

  return (
    <div className="booking-container flex p-10 m-auto gap-7 ">
      <BookingProvider paramID={bookingId}>
        <TicketChooseSeats></TicketChooseSeats>
        <Ticket></Ticket>
      </BookingProvider>
    </div>
  );
};

export default BookingTicket;
