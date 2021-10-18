import React, { useEffect } from "react";

import wheelImage from "../style/img/wheel.png"
import rulewheel from "../style/img/rulewheel.png";

import $ from "jquery";

function Wheel({
    spinState,
    currentLength
}) {
    useEffect(() => {
        if (spinState === true) {
            $(".wheel").css("transform", "rotate(" + currentLength + "deg)");
        }
    }, [currentLength]);

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