import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import background from "../assets/images/background.jpg";
import Selectbox, { SelectItem } from "../components/selectbox/selectbox";
import WeatherForecastBar from "../components/weather-forecast-bar/weather-forecast-bar";
import cities from "../data/cities.json";
import { GET_CITY_BY_NAME_QUERY } from "../services/weather-service";
import "./home-page.css";

const HomePage = () => {
  const defaultCityName = useMemo(
    () => cities.find((e) => e.id === "38")?.name,
    []
  );
  const [selectedCity, setSelectedCity] = useState<string>(defaultCityName!);
  const { loading, error, data } = useQuery(GET_CITY_BY_NAME_QUERY, {
    variables: { name: selectedCity },
  });

  const { name, weather } = data?.getCityByName || {};

  return (
    <div className="homepage" style={{ backgroundImage: `url(${background})` }}>
      {error && `An error occured! Error: ${JSON.stringify(error)}`}
      <div className="homepage__wrapper">
        <WeatherForecastBar name={name} weather={weather} loading={loading} />
        <Selectbox
          defaultText="Seçiniz"
          items={cities.map((c) => {
            return { text: c.name, value: c.id.toString() };
          })}
          selectedValue="38"
          onChange={(item: SelectItem) => setSelectedCity(item.text)}
        />
      </div>
    </div>
  );
};
export default HomePage;
