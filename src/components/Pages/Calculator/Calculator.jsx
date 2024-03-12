import React, { useState } from "react";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import "./Calculator.scss";

const Calculator = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [weight, setWeight] = useState(0);
    const [rate, setRate] = useState(0);
    const [fuelConsumption, setFuelConsumption] = useState(0);
    const [fuelPrice, setFuelPrice] = useState(0);
    const [distance, setDistance] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [fuelCost, setFuelCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [tonKilometers, setTonKilometers] = useState(0);
    const [costPerTonKilometer, setCostPerTonKilometer] = useState(0);

    const calculate = () => {
        const distance = calculateDistance(from, to);
        const revenue = weight * rate;
        const fuelCost = (distance / 100) * fuelConsumption * fuelPrice;
        const totalCost = fuelCost + revenue;
        const tonKilometers = weight * distance;
        const costPerTonKilometer = totalCost / tonKilometers;

        setDistance(distance);
        setRevenue(revenue);
        setFuelCost(fuelCost);
        setTotalCost(totalCost);
        setTonKilometers(tonKilometers);
        setCostPerTonKilometer(costPerTonKilometer);
    };

    const calculateDistance = (from, to) => {
        return 1000; // Placeholder value
    };

    const handleCityChange = (e, city) => {
        if (e.target.name === "from") {
            setFrom(city);
        } else {
            setTo(city);
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Калькулятор стоимости перевозки</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="from">Точка А</label>
                        <input
                            type="text"
                            name="from"
                            id="from"
                            value={from}
                            onChange={(e) => handleCityChange(e, e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="to">Точка Б</label>
                        <input
                            type="text"
                            name="to"
                            id="to"
                            value={to}
                            onChange={(e) => handleCityChange(e, e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="weight">Количество груза (тонн или кубических метров)</label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="rate">Тариф на 1 тонну или 1 кубик (руб/тонну или руб/куб)</label>
                        <input
                            type="number"
                            name="rate"
                            id="rate"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="fuelConsumption">Расход топлива на 100 км</label>
                        <input
                            type="number"
                            name="fuelConsumption"
                            id="fuelConsumption"
                            value={fuelConsumption}
                            onChange={(e) => setFuelConsumption(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="fuelPrice">Цена топлива за литр</label>
                        <input
                            type="number"
                            name="fuelPrice"
                            id="fuelPrice"
                            value={fuelPrice}
                            onChange={(e) => setFuelPrice(e.target.value)}
                        />
                    </div>
                    <button className="Calculator-button" type="button" onClick={calculate}>
                        Рассчитать
                    </button>
                </form>
                <div className="results">
                    <div className="result-item">
                        <label>Расстояние между точками:</label>
                        <span>{distance} км</span>
                    </div>
                    <div className="result-item">
                        <label>Валовый доход:</label>
                        <span>{revenue} руб.</span>
                    </div>
                    <div className="result-item">
                        <label>Затраты на топливо:</label>
                        <span>{fuelCost} руб.</span>
                    </div>
                    <div className="result-item">
                        <label>Общая стоимость перевозки:</label>
                        <span>{totalCost} руб.</span>
                    </div>
                    <div className="result-item">
                        <label>Тоннокилометров, всего:</label>
                        <span>{tonKilometers} ткм</span>
                    </div>
                    <div className="result-item">
                        <label>Стоимость 1 тоннокилометра:</label>
                        <span>{costPerTonKilometer} руб./ткм</span>
                    </div>
                </div>
                <div className="map" > 
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [55.75, 37.62],
                                zoom: 10,
                            }}
                        >
                            <Polyline
                                geometry={[
                                    [from.latitude, from.longitude],
                                    [to.latitude, to.longitude],
                                ]}
                            />
                            <Placemark geometry={[from.latitude, from.longitude]} />
                            <Placemark geometry={[to.latitude, to.longitude]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
    );
};

export default Calculator;