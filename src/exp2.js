import React from "react";
import Expraw from "./customization/Experience.json";
import "./styles/main.css";

export function Exp2() {
    const result = [];
    Expraw.companies2.map((company) => {
        result.push(
            <div class="edu">
                <span id="logo-block">
                <img src={require(`${company.logo}`)}  alt={"company"} />
                </span>
                <span class="text">
                    <p class="school">{company.name}  </p>
                    <p class="dep">{company.position_time} </p>
                    <p class="time">{company.discription}  </p>
                </span>
            </div>
        );
    });

    return (
        result
    );
}

export default Exp2;