import React from 'react';
import './css/style.css';

export function BenifitsCard({ element }: any) {
    return (
        <>
            <div className="benifits-container_colletions__item">
                <img src={element.srcImage} alt="Иконка преимуществ" />
                <span>{element.textBenifit}</span>
            </div>
        </>
    );
}