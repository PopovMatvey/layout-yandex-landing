import React from "react";
import './css/style.css';
import firstScreenBackground from './image/first-screen-background.svg';
import scooterImage from './image/scooter.svg';
import logo from './image/logo.svg';

/**
 * Первый экран
 * @returns Копонент "Первый экран"
 */
export function FirstScreen() {

    return (
        <>
            <div className="first-screen">
                <div className="first-screen_info">
                    <img src={logo} alt="Изображение лого" className="first-screen-logo" />
                    <h1>Вступайте в клуб Самокатов</h1>
                    <span className="first-screen_info__text">
                        Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8 месяцев за &nbsp;
                        <span className="first-screen_info_radio-button">
                            <span className="first-screen_info__new-price" >499 ₽ </span>
                            <span>&nbsp;</span>
                            <span className="first-screen_info__old-price"> 3190 ₽ </span>
                            <span>&nbsp;</span>
                        </span>
                    </span>
                    <div className="first-screen_info__button-container">
                        <a href="https://go.yandex/ru_ru/lp/rides/scooter">
                            Стать частью клуба
                        </a>
                    </div>
                </div>
                <div className="first-screen_img">
                    <div className="first-screen_img__background">
                        <img src={firstScreenBackground} alt="Изображение фона" className="first-screen_info__background" />
                    </div>
                    <div className="first-screen_img__scooter">
                        <img src={scooterImage} alt="Изображение самоката" />
                    </div>
                </div>
            </div>
        </>
    )
}