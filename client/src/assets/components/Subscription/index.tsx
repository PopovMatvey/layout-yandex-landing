import React from "react";
import './css/style.css';
import firstScooter from './image/firstScooter.svg';
import secondScooter from './image/secondScooter.svg';

/**
 * Абонемент
 * @returns компонент "Абонемент"
 */
export function Subscription() {

    return (
        <>
            <div className="subscription-content">
                <div className="subscription-content_row">
                    <div className="subscription-content_colomn">
                        <h3>
                            Купить абонемент и вступить в клуб смогут те, кто в Плюсе
                        </h3>
                        <span>
                            За каждую поездку на самокатах такие пользователи получают кешбэк
                            баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go,
                            покупки и заказы в других сервисах Яндекса
                        </span>
                        <img src={secondScooter} alt="Изображение самоката" />
                    </div>
                    <div className="subscription-content_colomn">
                        <img src={firstScooter} alt="Изображение самоката" className="colomn-scooter"/>
                        <div className="subscription-content_colomn-text">
                            <h3>
                                80  % наших пользователей уже в клубе и экономят на поездках
                            </h3>
                            <span>
                                Присоединяйтесь — опция начнёт действовать в начале сезона–2024.
                                Об открытии сезона предупредим заранее, чтобы вы были готовы
                            </span>
                            <a href="https://go.yandex/ru_ru/lp/rides/scooter">Хочу абонемент</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}