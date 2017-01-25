import * as React from 'react'
import styles from './styles.css'


class TimeLeftComponent extends React.Component {
    constructor(props) {
        super(props);

        let closeOpenTime = [
            {},
            {openTime: null, closeTime: null},
            {openTime: null, closeTime: null},
            {openTime: null, closeTime: null},
            {openTime: null, closeTime: null},
            {openTime: null, closeTime: null},
            {openTime: null, closeTime: null},
            {openTime: null, closeTime: null}
        ];

        let customTime = new Date();
        customTime.setMinutes(0);
        customTime.setSeconds(0);
        customTime.setHours(11);
        customTime.setHours(21);

        closeOpenTime[1].openTime = customTime;
        closeOpenTime[1].closeTime = customTime;
        closeOpenTime[2].openTime = customTime;
        closeOpenTime[2].closeTime = customTime;
        closeOpenTime[3].openTime = customTime;
        closeOpenTime[3].closeTime = customTime;
        closeOpenTime[4].openTime = customTime;
        closeOpenTime[4].closeTime = customTime;

        customTime.setHours(11);
        closeOpenTime[5].openTime = customTime;
        customTime.setHours(22);
        closeOpenTime[5].closeTime = customTime;

        customTime.setHours(12);
        closeOpenTime[6].openTime = customTime;
        customTime.setHours(22);
        closeOpenTime[6].closeTime = customTime;

        customTime.setHours(12);
        closeOpenTime[7].openTime = customTime;
        customTime.setHours(21);
        closeOpenTime[7].closeTime = customTime;


        this.state = {
            time: new Date(),
            closeOpenTime: closeOpenTime,
            isOpen: true,
            interval: null
        };
    }

    componentDidMount () {
        this.setState({
            interval: setInterval(() => {
                let newDate = new Date();
                let closeTime = this.state.closeOpenTime[newDate.getDay()]['closeTime'];
                let differenceDate = new Date();

                differenceDate.setHours(closeTime.getHours() - newDate.getHours());
                differenceDate.setMinutes(closeTime.getMinutes() - newDate.getMinutes());
                differenceDate.setSeconds(closeTime.getSeconds() - newDate.getSeconds());

                this.setState({
                    time: differenceDate
                })
            }, 1000)
        })
    }

    componentWillUnmount () {
        clearInterval(this.state.interval);
    }

    render () {
        let currentTime = this.state.time;
        let time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
        let timeText = '';

        if (this.state.isOpen) {
            timeText = `Sulkeutuu ${time} paasta`;
        } else {
            timeText = `Aukeamiseen viela: ${time}`;
        }

        return (
            <div>
                {timeText}
            </div>
        );
    }
}


class OpenTimeComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className={styles.openTime}>
                <TimeLeftComponent/>
                <br></br>

                <span>Aukioloajat: </span>
                <span>Ma: 11.00 - 21.00</span>
                <span>Ti: 11.00 - 21.00</span>
                <span>Ke: 11.00 - 21.00</span>
                <span>To: 11.00 - 21.00</span>
                <span>Pe: 11.00 - 22.00</span>
                <span>La: 12.00 - 22.00</span>
                <span>Su: 12.00 - 21.00</span>
            </div>
        );
    }
}


class AboutComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className={styles.wrapper}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1834.5969372402867!2d27.120616251642616!3d62.624528349513206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4684db6948c87357%3A0xa425c9e1e9cf80e9!2sHerralantie+3%2C+77600+Suonenjoki!5e0!3m2!1sen!2sfi!4v1484248946314" width="700" height="450" frameBorder="0"></iframe>
                <div className={styles.contact}>
                    <span>Puhelin: 017-513030</span><br></br><br></br>
                    <span>Osoite: Herralantie 3</span><br></br>
                    <span>77600 SUONENJOKI</span><br></br>

                    <OpenTimeComponent/>
                </div>

            </div>

        );
    }
}

export default AboutComponent;
