import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Views
import HomePage from "../views/HomePage";

// Components
import ColorPicker from "../components/ColorPicker";
import CountdownTimer from "../components/CountdownTimer";
import DigitalClock from "../components/DigitalClock";
import SearchList from "../components/SearchList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="colorpicker" element={<ColorPicker />} />
        <Route path="countdowntimer" element={<CountdownTimer />} />
        <Route path="digitalclock" element={<DigitalClock />} />
        <Route path="searchlist" element={<SearchList />} />
      </Route>
    </Routes>
  );
}