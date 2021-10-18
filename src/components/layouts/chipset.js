import React from "react";
import { Grid } from '@mui/material';

import chip1 from "../style/img/100.png"
import chip2 from "../style/img/500.png"
import chip3 from "../style/img/1k.png"
import chip4 from "../style/img/10k.png"
import chip5 from "../style/img/50k.png"
import chip6 from "../style/img/100k.png"
import chip7 from "../style/img/500k.png"
import chip8 from "../style/img/1m.png"

function Chip({
    chipValue,
    setChipValue
}) {
    const CurrentChipValue = (value) => {
        setChipValue(value);
    }

    return (
        <Grid container xl={4} md={5} sm={12} xs={10} spacing={5} justifyContent="space-between" alignItems="center" className="noselect">
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(100)}>
                <img src={chip1} className={chipValue === 100 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(500)}>
                <img src={chip2} className={chipValue === 500 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(1000)}>
                <img src={chip3} className={chipValue === 1000 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(10000)}>
                <img src={chip4} className={chipValue === 10000 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(50000)}>
                <img src={chip5} className={chipValue === 50000 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(100000)}>
                <img src={chip6} className={chipValue === 100000 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(500000)}>
                <img src={chip7} className={chipValue === 500000 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
            <Grid item md={3} sm={3} xs={3} onClick={() => CurrentChipValue(1000000)}>
                <img src={chip8} className={chipValue === 1000000 ? "active-btnChip" : "btnChip"} alt="NoImg" />
            </Grid>
        </Grid>
    );
}

export default Chip;