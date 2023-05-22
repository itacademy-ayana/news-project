import React from 'react'
import { CardNews } from '../../Components/CardNews'
import cls from '../../Styles/SportStyles/index.module.scss'  

export const CriminalPage = () => {

    const [news, setNews] = React.useState(
        JSON.parse(localStorage.getItem('news')) || []
    )


    const filtredNews = news.filter((item) => item.category === 'criminal')

    // console.log(filtredNews);

    return (
        <div className={cls.sport_container}>
            {filtredNews.map((item) => (
                <CardNews item={item} />
            ))}
        </div>
    );
};