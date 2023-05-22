import React from 'react'
import cls from './index.module.scss'

export const CardNews = ({item, DeleteNews}) => {
    return (
        <div className={cls.container_card} data-aos="fade-up">
            <span>"{item.category}"</span>
            <h1>{item.title}</h1>
            <img src={item.img} />
            <p>{item.info}</p>
            <div>
                <button onClick={() => DeleteNews(item.id)}>delete</button>
            </div>
        </div>
    )
}