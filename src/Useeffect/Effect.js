import { useState, useEffect } from "react";
import axios from "axios";

export default function Index() {
  //Inisialisasi state
  const [show, setShow] = useState(false);
  const [valueInput, setValueInput] = useState({
    Kelompok: "",
    password: "",
  });

  // const state = {
  //   tekkom:[],
  //   visible:false,
  // };
  const [data, setData] = useState({
    tekkom:[]
  });

  //Efek untuk menampilkan notifikasi ketika dimasukkan nomer kelompok 32
  useEffect(() => {
    if (valueInput.Kelompok === "32") {
      alert(` Selamat Datang Anggota Kelompok: ${valueInput.Kelompok}`);
    }
  }, [valueInput.Kelompok]);

  //Efek untuk memanggil gambar dari API (gambarnya cuma keliatan 600x600)
  useEffect(() => {
    axios({
      method:"get",
      url:"https://jsonplaceholder.typicode.com/photos",
      url:"http://localhost:3000/user",
      headers: {
      accept:"*/*",
      },
    })
    // fetch("https://jsonplaceholder.typicode.com/photos")
    // .then((response) => response.json())
    .then((data) => {
      console.log("[Data API Gambar Berhasil dipanggil]", data);
      setData({tekkom:[data]});
    })
  //   .then((data) => {
  //     console.log(data.data);
  //     setData({
  //       data:data.data
  //     });
  // })

    .catch((error) => {
    console.log(error);
    });
  }, []);

  //Handler untuk masukan
  const inputHandler = (event, type) => {
    if (type === "kelompok") {
      setValueInput((prevState) => {
        return { ...prevState, Kelompok: event.target.value };
      });
    }
  };

  return (
    <div className="container">
      {/* Membuat kotak inputan dan mendeteksi inputan */}
          <div className="titleWrapper">
            <p className="title">Masukkan Kelompok Anda :</p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                placeholder="Kelompok"
                size="50"
                value={valueInput.Kelompok}
                onChange={(event) => inputHandler(event, "kelompok")}
              />
            </div>
          </div>
        {/* Tombol untuk menampilkan dan menyembunyikan gambar */}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
      </button>
      
      {show && (
        <>
          <p className="title" style={{ marginTop: 40 }}>
          Gambar :
          </p>
          {/* Memanggil maksimal 10 gambar dari API */}
          <ol>
            {data.slice(0, 10).map((value) => (
                  <img
                    key={value.id}
                    alt={value.title}
                    src={value.url}
                    className="Foto"
                  />           
            ))}
          </ol>
        </>
      )} 
    </div>
  );
}
