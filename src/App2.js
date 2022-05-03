import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Board from "./Board";
import BoardList from "./BoardList";
import Main from "./Main";
import NoMatch from "./NoMatch";

const App2 = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/boardlist" element={<BoardList />} />
            {/* <Route path="/board" element={<Board />}
            <Route path="/board/*" element={<Board seq="1"/>} /> 
            <Route path="/board/:seq/:title" element={<Board />} />*/}

            <Route path="/board" element={<Board/>} />

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export default App2;