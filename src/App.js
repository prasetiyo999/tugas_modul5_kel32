import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Useeffect from "./Useeffect/Effect";

export default function App( ) {
    return (
        //Membuat Tombol Link Masing-masing hook
        <BrowserRouter>
        <header>
            <div className="title">
                <p>Kelompok 32</p>
            </div>
            <nav>
                <Link className="text" to="/">
                useEffect 
                </Link>
            </nav>
        </header>

        <Switch>
            <Route path="/" exact component={Useeffect} />
        </Switch>
        </BrowserRouter>
    );
}