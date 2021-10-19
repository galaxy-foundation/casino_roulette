import React, { useEffect, useState } from "react";

import wheelImage from "../style/img/wheel.png"
import rulewheel from "../style/img/rulewheel.png";

import $ from "jquery";
import { set } from "mongoose";

function Wheel({
    spinState,
    currentLength
}) {

    const [rotateLength, setRotateLength] = useState(0);
    const [rNum,setRNum] = useState(0);

    function getRandom() {
        var _rNum =rNum + 2
        //  Math.floor(rNum+ Math.random() * 5 + 3);
        setRNum(_rNum);
        return _rNum;
    }

    useEffect(() => {
        console.log("currentLength",currentLength)
        setRotateLength(360 * getRandom() - (360 / 37) * currentLength);
        // * getRandom() 
    }, [currentLength]);

    useEffect(() => {
        if (spinState === true) {
            $(".wheel").css("transform", "rotate(" + rotateLength + "deg)");
        }
    }, [rotateLength]);

    return (
        <div className="noselect">
            <div style={{ position: "relative" }}>
                <img src={rulewheel} className="rulewheel" alt="NoImg" />
                <img src={wheelImage} className="wheel" alt="NoImg" />
            </div>
        </div>
    );
}

export default Wheel;