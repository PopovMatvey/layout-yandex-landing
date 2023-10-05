import React from "react";
import "./css/style.css";
import { FirstScreen } from "../FirstScreen";
import { Benifits } from "../Benifits";
import { Events } from "../Events";
import { Subscription } from "../Subscription";

/**
 * Основной контент
 * @returns компонент "Основной контент"
 */
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