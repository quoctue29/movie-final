import { useBooking } from "./booking-context";

const Ticket = () => {
  const { infoMovie, listChooseSeat } = useBooking();
  return (
    <div className="booking-right w-[30%] p-3 ">
      <div className="w-full mb-3">
        <img
          src={infoMovie.hinhAnh}
          alt=""
          className="w-[80%] object-cover mx-auto"
        />
      </div>
      <div className="info-movie">
        <h2 className="font-bold text-sm mb-3">{infoMovie.tenPhim}</h2>
        <p>
          <b>Rạp: </b>
          <span>
            {infoMovie.tenCumRap} | {infoMovie.tenRap}
          </span>
        </p>
        <p>
          <b>Suất chiếu: </b> {infoMovie.gioChieu} | {infoMovie.ngayChieu}
        </p>
        <p>
          <b>Combo: </b>
        </p>
        <p className="flex flex-wrap">
          <b>Ghế: </b>
          {listChooseSeat.length > 0 &&
            listChooseSeat.map((item, index) => (
              <span key={`${item.id}-${index}`}>{item.name}</span>
            ))}
        </p>
        <p>
          Tổng:{" "}
          <span className="text-[#f26b38] text-xl">
            {listChooseSeat?.reduce((sum, item) => sum + item.price, 0)} VNĐ
          </span>
        </p>
      </div>
      <div className="text-center ">
        <button className="bg-[#f26b38] py-2 px-4 rounded-lg">
          Thanh Toán
        </button>
      </div>
    </div>
  );
};
export default Ticket;
