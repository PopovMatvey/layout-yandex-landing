import React from "react";
import './css/style.css';
import { BenifitsCard } from "../BenifitsCard";

export function Benifits() {
    const arrayBenifits = [
        {
            srcImage: "./images/Benifits/free.svg",
            textBenifit: "0 ₽ за старт в каждой поездке",
        },
        {
            srcImage: "./images/Benifits/friends.svg",
            textBenifit: "Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный старт",
        },
        {
            srcImage: "./images/Benifits/pause.svg",
            textBenifit: "Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть",
        },
        {
            srcImage: "./images/Benifits/batary.svg",
            textBenifit: "Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно",
        },
    ]

    return (
        <>
            <div className="benifits-container">
                <div className="benifits-container_title">
                    <h2>
                        Вот что даёт участие в клубе
                    </h2>
                </div>
                <div className="benifits-container_colletions">
                    {
                        arrayBenifits.map((element: any, index: number) =>
                            <BenifitsCard key={index} element={element} />
                        )
                    }
                </div>
            </div>
        </>
    );
}