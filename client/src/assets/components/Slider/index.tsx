import React from "react";
import "./css/style.css";
import { useActiveIndexState } from "./hook/useActiveIndexState";
import { items } from "./data/arrayItems";
import { CarouselItem as SliderlItem } from "./SliderlItem";

/**
 * Слайдер
 * @returns Компонент "Слайдер"
 */
export const Slider = () => {
  const { activeIndex, setActiveIndex } = useActiveIndexState();

  // Обновить индекс
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    if (newIndex === 0) {
      document.querySelector('.left')?.classList.add('not-active');
      document.querySelector('.right')?.classList.remove('not-active');
    }

    if (newIndex === items.length - 1) {
      document.querySelector('.left')?.classList.remove('not-active');
      document.querySelector('.right')?.classList.add('not-active');
    }

    if ((newIndex !== 0) && (newIndex !== items.length - 1)) {
      document.querySelector('.left')?.classList.remove('not-active');
      document.querySelector('.right')?.classList.remove('not-active');
    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      {/* <h1>Слайдер</h1> */}
      <div className="carousel">
        {/* Содержимое слайдера */}
        <div
          className="inner"
          style={{
            transform: `translate(-${activeIndex * 100}%)`
          }}
        >
          {items.map((item, i) => {
            return <SliderlItem key={i++} item={item} />;
          })}
        </div>
        <div className="carousel-buttons">
          {/* Кнопка назад */}
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span className="material-symbols-outlined left not-active"></span>
          </button>
          {/* Конпка назад */}
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <span className="material-symbols-outlined right"></span>
          </button>
        </div>
      </div>
    </>
  );
};