import { useBooking } from "./booking-context";

const TicketChooseSeats = () => {
  const { listSeat, handleClick } = useBooking();
  return (
    <div className="booking-left w-[75%] bg-[#f26b38] p-3 ">
      <h3 className="title text-2xl mb-5 text-white">CHỌN GHẾ: </h3>
      {listSeat.length > 0 && (
        <div className="flex justify-center  w-full bg-white py-7 px-3 ">
          <div className="list-seat flex gap-6 w-[65%] text-xs">
            <div className="flex flex-col-reverse gap-y-1 ">
              {"abcdefghijk"
                .toUpperCase()
                .split("")
                .map((item, index) => (
                  <div
                    className="border border-gray-500 w-[20px] h-[20px] flex justify-center items-center"
                    key={`item-${index}`}
                  >
                    {item}
                  </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-y-1 gap-x-4 h-[230px]">
              {listSeat.length > 0 &&
                listSeat.map((item, index) => (
                  <div
                    key={item.maGhe}
                    className={`w-[20px] h-[20px] flex justify-center items-center bg-[#DBDEE1] seat cursor-pointer ${
                      item.loaiGhe === "Vip" ? "isVip" : ""
                    } ${item.daDat ? "checked" : ""}`}
                    onClick={(e) => {
                      e.currentTarget.classList.toggle("active");
                      handleClick(item);
                    }}
                    data-id={item.maGhe}
                  >
                    {(index % 16) + 1}
                  </div>
                ))}
            </div>
            <div className="flex flex-col-reverse gap-y-1 text-xs">
              {"abcdefghijk"
                .toUpperCase()
                .split("")
                .map((item, index) => (
                  <div
                    className="border border-gray-500 w-[20px] h-[20px] flex justify-center items-center"
                    key={`item-${index}`}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <div className="bg-white px-4 pb-4 text-center">
        <div className="px-4 border-b-[3px] border-b-gray-500 w-[30%] mx-auto mb-5">
          <h3 className=" title">Màn hình</h3>
        </div>
        <div className="flex justify-between items-center w-[70%] m-auto gap-3 ">
          <span className="before:bg-[#7dc71d] before:w-[10px] before:h-[10px] before:content-[''] before:inline-block before:mr-2 text-sm">
            Ghế đang chọn
          </span>
          <span className="before:bg-blue-500 before:w-[10px] before:h-[10px] before:content-[''] before:inline-block before:mr-2 text-sm">
            Ghế Vip
          </span>
          <span className="before:bg-[#e11c01] before:w-[10px] before:h-[10px] before:content-[''] before:inline-block before:mr-2 text-sm">
            Ghế đã bán
          </span>
          <span className="before:bg-[#DBDEE1] before:w-[10px] before:h-[10px] before:content-[''] before:inline-block before:mr-2 text-sm">
            Có thể chọn
          </span>
        </div>
      </div>
    </div>
  );
};
export default TicketChooseSeats;
