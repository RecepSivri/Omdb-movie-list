import "./App.css";
import MainPageComponent from "./pages/mainPage/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { notification } from "antd";
import DetailPageComponent from "./pages/detailPage/detailPage";
function App() {
  const [api, contextHolder] = notification.useNotification();

  const toastr = (header: string, description: string) => {
    api.error({
      message: header,
      description: description,
      placement: "bottomRight",
    });
  };
  return (
    <>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageComponent toastr={toastr} />} />
          <Route
            path="/detail/:id"
            element={<DetailPageComponent toastr={toastr} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
