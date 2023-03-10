import React, { useEffect } from 'react'
import styles from "./Entertainment.module.css"
import { useNavigate } from "react-router-dom"

export default function Entertainment() {

    const [movieAction, setMovieAction] = React.useState({});
    const [receivedAction, setReceivedAction] = React.useState(false);
    const [action, setAction] = React.useState([]);

    const [movieThriller, setMovieThriller] = React.useState({});
    const [receivedThriller, setReceivedThriller] = React.useState(false);
    const [thriller, setThriller] = React.useState([]);

    const [movieHorror, setMovieHorror] = React.useState({});
    const [receivedHorror, setReceivedHorror] = React.useState(false);
    const [horror, setHorror] = React.useState([]);



    const getData_1 = async () => {
        let response;

        try {
            response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=71850be90e5693966166d2e5c8334b2d&sort_by=popularity.desc&with_genres=28`);
        } catch (error) {
            console.log('There was an error', error);
        }

        if (response?.ok) {
            setMovieAction(await response.json());
            await setReceivedAction(true);
        }
        else {
            console.log(`HTTP Response Code: ${response?.status}`)
        }

    }

    const getData_2 = async () => {
        let response;
        try {
            response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=71850be90e5693966166d2e5c8334b2d&sort_by=popularity.desc&with_genres=$53`);
        } catch (error) {
            console.log('There was an error', error);
        }

        if (response?.ok) {
            setMovieThriller(await response.json());
            await setReceivedThriller(true);

        }
        else {
            console.log(`HTTP Response Code: ${response?.status}`)
        }

    }

    const getData_3 = async () => {
        let response;

        try {
            response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=71850be90e5693966166d2e5c8334b2d&sort_by=popularity.desc&with_genres=$27`);
        } catch (error) {
            console.log('There was an error', error);
        }

        if (response?.ok) {
            setMovieHorror(await response.json());
            await setReceivedHorror(true);
        }
        else {
            console.log(`HTTP Response Code: ${response?.status}`)
        }

    }



    React.useEffect(() => {
        getData_1();
        getData_2();
        getData_3();
    })
    React.useEffect(() => {
        if (receivedAction) {
            setAction(movieAction.results.map((item) => {
                return (
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} className={styles.image}></img>
                )
            }));

        }
    }, [receivedAction])

    React.useEffect(() => {
        if (receivedThriller) {
            setThriller(movieThriller.results.map((item) => {
                return (
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} className={styles.image}></img>
                )
            }));

        }
    }, [receivedThriller])

    React.useEffect(() => {
        if (receivedHorror) {
            setHorror(movieHorror.results.map((item) => {
                return (
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} className={styles.image}></img>
                )
            }));

        }
    }, [receivedHorror])

    const navigate = useNavigate();
    function handleClick() {
        navigate("/profile")
    }

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.text1}>Super App</div>

                <img src={'../../Images/imageIcon.png'} className={styles.icon} onClick={handleClick}
                ></img>

            </div>
            <div className={styles.middle}>
                Entertainment trending today
            </div>
            <div className={styles.bottom}>
                <div className={styles.box1}>Action</div>
                <div className={styles.box2}>
                    {receivedAction && action}
                </div>
                <div className={styles.box3}> Thriller</div>
                <div className={styles.box4}>
                    {receivedThriller && thriller}
                </div>
                <div className={styles.box5}> Horror</div>
                <div className={styles.box6}>
                    {receivedHorror && horror}
                </div>
            </div>
        </div>
    )
}
