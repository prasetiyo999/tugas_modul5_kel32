import { useContext, useEffect, createContext, useState } from "react";
import "./Context.css";
import axios from "axios";
import Bulan from "./Moon.jpg";
import Matahari from "./Sun.jpg";
//Membuat objek berupa array yang akan dipanggil di context
// const themes = {
//   light: {
//     text: "Gambar Bulan",
//     src: Bulan,
//   },
//   dark: {
//     text: "Gambar Matahari",
//     src: Matahari,
//   },
// };

//Membuat context
const ThemeContext = createContext();

//Penggunaan nilai pada array untuk context
export default function Context() {
    const [valuePhotos, setValuePhotos] = useState({});

  useEffect(() => {
    axios({
      method:"get",
      url:"https://jsonplaceholder.typicode.com/photos",
      // url:"http://localhost:3000/user",
      headers: {
      accept:"*/*",
      },
      })
      .then((response) => response.json())
      .then((valuePhotos) => {
        console.log("[Data API Gambar Berhasil dipanggil]");
        setValuePhotos(valuePhotos);
      })
      .catch((error) => {
      console.log(error);
      });
  }, []);

    

  return (
    <ThemeContext.Provider value={valuePhotos}>
      <div
        className="contentWrapper"
        // style={{ backgroundColor: valuePhotos.src }}
      >
        {/* <Content tema={valuePhotos} />
        <button
          className="Button"
          onClick={() =>
            
          // setValuePhotos(
            //  valuePhotos.id + 1
            // )
          }
        > */}
          {/* Tombol untuk mengubah gambar yang ditampilkan */}
          Ubah Gambar
        {/* </button> */}
        {/* <div className="fotoItem ">
            <img
            style={{height: 600 ,width:600 }}
            src= {valuePhotos.url}
            key= {valuePhotos.id}
            alt= {valuePhotos.title}
            className="Foto"
            />
        </div> */}
        <p className="title" style={{ marginTop: 40 }}>
          Gambar :
          </p>
          {/* Memanggil maksimal 10 gambar dari API */}
          <ol>
            {valuePhotos.slice(0, 10).map((value) => (
                  <img
                    key={value.id}
                    alt={value.title}
                    src={value.url}
                    className="Foto"
                  />           
            ))}
          </ol>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}

//Untuk menampilkan judul gambar sesuai nilai text pada array
function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p className="titleContext" style={{ color: "black" }}>
       {theme.text}
    </p>
  );
}

// function Change(props) {

//     if(key <=10){
//       key=key++;
//     }
//     else{
//       key=1;
//     }
// }

