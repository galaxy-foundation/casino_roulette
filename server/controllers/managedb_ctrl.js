const {isValidToken} = require('../models/serverapi')

const OtherBetSet = {
    "dozen1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "dozen2": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    "dozen3": [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    "column1": [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    "column2": [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    "column3": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    "red": [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    "black": [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    "even": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    "odd": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    "half1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    "half2": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
}

const values = [
    "hlaf1",
    "hlaf2",
    "red",
    "black",
    "even",
    "odd",
];

const usersPoints = {}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rotateValue(user) {
    const randomInterval = getRandomInt(0, 37) * (360 / 37) + getRandomInt(3, 4) * 360;
    user.currentLength += randomInterval;
    totAngle = (totAngle + randomInterval) % 360;
    
    var x = 360 - totAngle;
    for (var i = 0; i < 37; i++) {
        if (x >= i * Math.floor((360 / 37)) && x <= (i + 1) * Math.ceil((360 / 37))) {
            user.patternNum[i];
            break;
        }
    }
}

function calcMatch(user, betValue) {
    for(let i in betValue) {
        const key = keys[i];
        const value = betValue[key];
        if (value > 0) {
            if (!isNaN(key)) {
                let k = Number(key)
                if (k>=0 && k<=36 && k === spinResult) {
                    user.totalMoney += value * 36;
                }
            } else {
                if (OtherBetSet[key].indexOf(spinResult)!==-1) {
                    const cofficient = values.indexOf(key)!==-1 ? 2 : 3;
                    user.totalMoney += value * cofficient;
                }
            }
        }
    }
}


module.exports = {
    startSignal: async (req, res) => {
        try {
            const {token, betValue} = req.body;
            const valid = await isValidToken(token);
            if (valid) {
                let user = usersPoints[token];
                if (user===undefined) {
                    usersPoints[token] = {
                        totalMoney: 0,
                        totAngle: 0,
                        currentLength: (1 / 37) * 360,
                        spinResult: 0,
                    };
                    user = usersPoints[token];
                }
                rotateValue(user);
                calcMatch(user, betValue);
                res.json({
                    status: 'ok',
                    rotateLength: currentLength,
                    numResult: user.spinResult,
                    moneyResult: user.totalMoney
                });
            } else {
                res.json({
                    status: 'err',
                    message: 'invalid user'
                });
            }
        } catch (err) {
            console.log(err)
            res.json({
                status: 'err',
                message: 'unknown error'
            });
        }
    }
}