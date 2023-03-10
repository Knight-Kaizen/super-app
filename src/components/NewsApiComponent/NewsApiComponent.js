import React from "react";
import styles from "./NewsApiComponent.module.css"

export default
    function NewsApiComponent() {

    const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e98f1f2be3a44b92ae736a01f0eb9e0f';

    const [news, setNews] = React.useState({});
    const [ok, setOk] = React.useState(false);  //News data received or not??
    const [newsImage, setNewsImage] = React.useState('');
    const [newsTitle, setNewsTitle] = React.useState('');
    const [newsDescription, setNewsDescription] = React.useState('');


    const getNews = async () => {
        let response;
        try {
            response = await fetch(API_ENDPOINT);
        } catch (error) {
            console.log('There was an error', error);
        }
        if (response?.ok) {
            setNews(await response.json());
            await setOk(true);
        } else {
            console.log(`HTTP Response Code: ${response?.status}`)
        }
    }

    React.useEffect(() => {
        getNews();
    }, [])

    

    React.useEffect(() => {
        if (ok) {
            let indx = 0;
            console.log(indx);
            setNewsImage(news.articles[indx].urlToImage);
            setNewsDescription(news.articles[indx].description);
            setNewsTitle(news.articles[indx].title);
        }
    }, [news])
    

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const minutes = date.getMinutes();
    let hours = date.getHours();
    var amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; 
    hours = hours ? hours : 12; 

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <img src={newsImage} className={styles.image1}></img>
                <div className={styles.text1}>
                    <h2 className={styles.text2}>{newsTitle}
                    </h2>
                    <pre className={styles.text3}>{day < 10 && 0}{day}-{month < 10 && 0}{month}-{year} | {hours < 10 && 0}{hours}:{minutes < 10 && 0}{minutes} {amOrPm}</pre>
                </div>
            </div>
            <div className={styles.bottom}>
                {newsDescription}
            </div>
        </div>
    )
}