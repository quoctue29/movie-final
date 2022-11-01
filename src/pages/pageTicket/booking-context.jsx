import { createContext, useContext, useEffect, useState } from "react";

const BookingContext = createContext(undefined);

function BookingProvider({ value, ...props }) {
  const [listSeat, setListSeat] = useState([]);
  const [infoMovie, setInfoMovie] = useState({});
  const [listChooseSeat, setListChooseSeat] = useState([]);
  useEffect(() => {
    (async () => {
      await fetch(
        `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${props.paramID}`,
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setInfoMovie(data.content.thongTinPhim);
          setListSeat(data.content.danhSachGhe);
        })
        .catch((err) => console.log(err));
    })();
  }, [props.paramID]);
  const handleClick = (itemMovie) => {
    let listClone = [...listChooseSeat];
    const index = listChooseSeat.findIndex(
      (item) => String(item.id) === String(itemMovie.maGhe)
    );
    if (index === -1) {
      listClone.push({
        id: itemMovie.maGhe,
        name: itemMovie.tenGhe,
        price: itemMovie.giaVe,
      });
    } else {
      listClone = listClone.filter((item) => item.id !== itemMovie.maGhe);
    }
    setListChooseSeat(listClone);
  };
  const values = {
    listSeat: listSeat || [],
    infoMovie: infoMovie || {},
    handleClick,
    listChooseSeat: listChooseSeat || [],
  };
  return (
    <BookingContext.Provider
      value={values}
      {...props}
    ></BookingContext.Provider>
  );
}
function useBooking() {
  const context = useContext(BookingContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within CountProvider");
  return context;
}
export { BookingProvider, useBooking };
