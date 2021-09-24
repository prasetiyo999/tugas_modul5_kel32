import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Usecontext from "./Usecontext/Context";

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
                All Rights Belong to Their Respective Owners
                </Link>
            </nav>
        </header>

        <Switch>
            <Route path="/" exact component={Usecontext} />
        </Switch>
        </BrowserRouter>
    );
}