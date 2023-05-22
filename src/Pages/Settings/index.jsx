import React from 'react'
import cls from '../../Styles/SettingsStyles/index.module.scss'
import { CardNews } from '../../Components/CardNews'

export const Settings = () => {
    const [news, setNews] = React.useState (
        JSON.parse(localStorage.getItem('news')) || []
    );

    React.useEffect(() => {
        localStorage.setItem("news", JSON.stringify(news));
    });

    const DeleteNews = (id) => {
        const askToDelete = window.confirm("Вы точно хотите удалить эту новость?")

        if(askToDelete) {
            setNews(news.filter((item) => item.id !== id))
        }
        return
    }

    return (
        <div className={cls.settings_container}>
            {news.map((item) => (
                <CardNews item={item} DeleteNews={DeleteNews} />
            ))}
        </div>
    );
};