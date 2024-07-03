import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SuggestList from "./components/SuggestList";
import Content from "./components/Content";
import { json } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");

  // get data from local storage
  // const getDataFromLocalStorage = () => {
  //   let data = JSON.parse(localStorage.getItem("data"));
  //   if (data) {
  //     return data;
  //   } else {
  //     return [];
  //   }
  // };

  // main Data state
  const [data, setData] = useState([]);

  // save data to local storage
  // useEffect(() => {
  //   let json = JSON.stringify(data);
  //   localStorage.setItem("data", json);
  // }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const Url = `https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=${search}`;
      const url = Url;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "dc27287587msha33f1038c315a4fp1f00c3jsn3223d095ebfb",
          "X-RapidAPI-Host": "news67.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.news);
        setData(result.news);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <SuggestList search={search} setSearch={setSearch} />
      <Content search={search} data={data} setData={setData} />
    </>
  );
}

export default App;
