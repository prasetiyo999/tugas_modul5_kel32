import { useContext, createContext, useState,useEffect } from "react";
import "./Context.css";
import axios from "axios";
//Membuat context
const ThemeContext = createContext();

export default function Context() {
  //State-state yang digunakan
  const [tekkom, setData] = useState([]);
  const [count, setCount] = useState(1);
  const countUp = () => setCount (count + 1);
  const countDown = () => setCount(count - 1);

  //Mengambil API dengan Axios
  const fetchData = async () => {
    // const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos");
    const { data } = await axios.get("http://localhost:3000/photos");
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Context Providerdengan nilai tekkom[count]
  return (
    <ThemeContext.Provider value={tekkom[count-1]}>
      <div className="container">   
        <>
        {/* Memanggil data ketika nilai count >0, <6 */}
            {count > 0 && count < 6 ? (
              <div>
                {tekkom.slice(count-1, count).map((value) => (
                  <div>
                  <ol>      
                    <img
                      key={value.id}
                      alt={value.title}
                      src={value.url}
                      className="Foto"
                    />           
                  </ol>
                  <Content tema={tekkom} />
                <div className="btnWrapper">
                  <button className="Button" onClick={countDown} >
                      Previous
                  </button>
                  <button className="Button" onClick={countUp}>
                      Next
                  </button>
                  
                </div>
                </div>
                ))}
              </div>
              ) : (
              //  Memanggil data ketika nilai count >5, <1 
              <div>
                {tekkom.slice(0, 1).map((value) => (
                  <div>
                  <ol>      
                    <img
                      key={value.id}
                      alt={value.title}
                      src={value.url}
                      className="Foto"
                    />           
                  </ol>
                  <Content tema={tekkom} />
                  <div className="btnWrapper">
                    <button className="Button" onClick={countDown}>
                        Previous
                    </button>
                    <button className="Button" onClick={countUp}>
                        Next
                    </button>
                    
                  </div>
                  </div>
                ))}
              </div>
          )}
        </>
    </div>
    </ThemeContext.Provider>
  );
}

//Pemberian nilai Content ke Context()
function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}

//Pemberian nilai ke Text Content()
function Text(props) {
  const tekkom = useContext(ThemeContext);
  return (
    //Menampilkan nama, alamat dan alias
    <div >
      {tekkom != null ? (
        <p className="titleWrapper" style={{ color: "black" }}>
          {tekkom.title}
          <br></br>
          {tekkom.address} 
          <br></br> 
          {tekkom.alias} 
        </p>
        ) : (
          <p className="titleWrapper" style={{ color: "black" }}>
            Yukinoshita Yukino
            <br></br>
            Chiba 
            <br></br>
            Under Snow
        </p>
      )}
    </div>
  );
}

