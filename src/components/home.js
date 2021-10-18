import React, { useState } from 'react'
import { Grid } from '@mui/material';
import WheelSet from "./layouts/wheelset";
import ChipSet from "./layouts/chipset";
import SpinSet from "./layouts/spinset";
import BetingTable from "./layouts/bettable";

function Home() {
    const [spinState, setSpinState] = useState(null);
    const [betState, setBetState] = useState(false);
    const [spinImg, setSpinImg] = useState("");
    const [chipValue, setChipValue] = useState(100);
    const [currentLength, setCurrentLength] = useState(0);
    const [totalBet, setTotalBet] = useState({
        "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0,
        "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0,
        "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 0, "29": 0,
        "30": 0, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "column1": 0, "column2": 0, "column3": 0,
        "dozen1": 0, "dozen2": 0, "dozen3": 0, "half1": 0, "half2": 0, "even": 0, "odd": 0, "red": 0, "black": 0
    });
    const [imgs, setImgs] = useState({
        "0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], "7": [], "8": [], "9": [], "10": [],
        "11": [], "12": [], "13": [], "14": [], "15": [], "16": [], "17": [], "18": [], "19": [], "20": [],
        "21": [], "22": [], "23": [], "24": [], "25": [], "26": [], "27": [], "28": [], "29": [], "30": [],
        "31": [], "32": [], "33": [], "34": [], "35": [], "36": [], "column1": [], "column2": [], "column3": [],
        "dozen1": [], "dozen2": [], "dozen3": [], "half1": [], "half2": [], "even": [], "odd": [], "red": [], "black": []
    });

    return (
        <div>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xl={4}></Grid>
                <Grid item xl={8}>
                    <label>My Balance: </label>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xl={3} lg={3} md={3} sm={10} xs={9}>
                    <WheelSet
                        spinState={spinState}
                        currentLength={currentLength}
                    />
                </Grid>
                <Grid item xl={1} lg={1} md={1}></Grid>
                <ChipSet
                    chipValue={chipValue}
                    setChipValue={setChipValue}
                    spinState={spinState}
                />
                <Grid item xl={1} lg={1} md={1} sm={1}></Grid>
                <Grid item xl={2} lg={2} md={2} sm={12}>
                    <SpinSet
                        totalBet={totalBet}
                        spinState={spinState}
                        setSpinState={setSpinState}
                        spinImg={spinImg}
                        setSpinImg={setSpinImg}
                        setCurrentLength={setCurrentLength}
                        setTotalBet={setTotalBet}
                        setImgs={setImgs}
                        betState={betState}
                        setBetState={setBetState}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                <BetingTable
                    spinState={spinState}
                    chipValue={chipValue}
                    totalBet={totalBet}
                    setTotalBet={setTotalBet}
                    imgs={imgs}
                    setImgs={setImgs}
                    setBetState={setBetState}
                />
            </Grid>
        </div >
    )
};

export default Home;