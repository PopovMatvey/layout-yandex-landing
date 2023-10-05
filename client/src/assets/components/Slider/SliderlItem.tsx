import React from "react";
import './css/coruser-item.css';

/**
 * Пункт слайдера
 * @param param0 - пропс (Пункт слайдера {icon, description})
 * @returns Компонент "Пункт слайдера"
 */
export const CarouselItem = ({ item }: any) => {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src={item.icon} alt="Изображение слайдера" />
    </div>
  );
};