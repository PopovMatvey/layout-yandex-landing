import React from "react";
import './css/style.css';
import firstParty from './images/party1.svg';
import secondParty from './images/party2.svg';
import thirdParty from './images/party3.svg';
import fouthParty from './images/party4.svg';
import { Slider } from "../Slider";

/**
 * События
 * @returns компонент "События"
 */
export function Events() {

    return (
        <>
            <div className="events-container">
                <div className="events-container_title">
                    <h3>
                        Эксклюзивный доступ к событиям Самокатов
                    </h3>
                </div>
                <div className="events-container_collection">
                    <div className="events-container_collection_colomn">
                        <span>
                            С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч.
                            В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем
                            Мезенцевым и слушали хор Attaque de Panique
                        </span>
                        <div className="events-container_collection__image">
                            <img src={secondParty} alt="Изображение события" />
                        </div>
                        <div className="events-container_collection__image">
                            <img src={fouthParty} alt="Изображение события" />
                        </div>
                    </div>
                    <div className="events-container_collection_colomn">
                        <div className="events-container_collection__image">
                            <img src={firstParty} alt="Изображение события" />
                        </div>
                        <div className="events-container_collection__image">
                            <img src={thirdParty} alt="Изображение события" />
                        </div>
                    </div>
                </div>
                <div className="events-container_collection-mobile">
                    <span className="events-container_collection-mobile-text">
                        С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч.
                        В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем
                        Мезенцевым и слушали хор Attaque de Panique
                    </span>
                    <Slider />
                </div>

            </div>
        </>
    )
}