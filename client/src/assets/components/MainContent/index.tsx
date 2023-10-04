import React from "react";
import "./css/style.css";
import { FirstScreen } from "../FirstScreen";
import { Benifits } from "../Benifits";
import { Events } from "../Events";
import { Subscription } from "../Subscription";

export function MainContent() {
    return (
        <>
            <div className="main-content-conteiner">
                <FirstScreen/>
                <Benifits/>
                <Events/>
                <Subscription/>
            </div>
        </>
    )
}