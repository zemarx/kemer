import * as React from 'react'
import styles from './about.component.css'


class TimeLeftComponent extends React.Component {
    constructor(props) {
        super(props);

        let closeOpenTime = [
            {},
            {timeToOpen: {hours: 11, minutes: 0, seconds: 0}, timeToClose: {hours: 21, minutes: 0, seconds: 0}},
            {timeToOpen: {hours: 11, minutes: 0, seconds: 0}, timeToClose: {hours: 21, minutes: 0, seconds: 0}},
            {timeToOpen: {hours: 11, minutes: 0, seconds: 0}, timeToClose: {hours: 21, minutes: 0, seconds: 0}},
            {timeToOpen: {hours: 11, minutes: 0, seconds: 0}, timeToClose: {hours: 21, minutes: 0, seconds: 0}},
            {timeToOpen: {hours: 11, minutes: 0, seconds: 0}, timeToClose: {hours: 22, minutes: 0, seconds: 0}},
            {timeToOpen: {hours: 12, minutes: 0, seconds: 0}, timeToClose: {hours: 22, minutes: 0, seconds: 0}},
            {timeToOpen: {hours: 12, minutes: 0, seconds: 0}, timeToClose: {hours: 21, minutes: 0, seconds: 0}},
        ];

        this.state = {
            time: new Date(),
            closeOpenTime: closeOpenTime,
            isOpen: true,
            interval: null
        };
    }

    computeTimeDifference (isOpen) {
        let newDate = new Date();
        let time = this.state.closeOpenTime[newDate.getDay()][isOpen ? 'timeToClose' : 'timeToOpen'];
        let differenceDate = new Date();

        differenceDate.setHours(time.hours - newDate.getHours());
        differenceDate.setMinutes(time.minutes - newDate.getMinutes());
        differenceDate.setSeconds(time.seconds - newDate.getSeconds());

        this.setState({
            time: differenceDate
        })
    }

    componentDidMount () {
        this.setState({
            interval: setInterval(() => {
                let newDate = new Date();
                let timeToOpen = this.state.closeOpenTime[newDate.getDay()]['timeToOpen'];
                let timeToClose = this.state.closeOpenTime[newDate.getDay()]['timeToClose'];

                if (newDate.getHours() < timeToClose && newDate.getHours() > timeToOpen) {
                    this.setState({ isOpen: true })
                } else {
                    this.setState({ isOpen: false })
                }

                this.computeTimeDifference(this.state.isOpen);
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
            timeText = `Sulkeutuu ${time} päästä`;
        } else {
            timeText = `Aukeamiseen vielä: ${time}`;
        }

        return (
            <div className={styles.showTimeText}>
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
        let weekDay = (new Date()).getDay();

        return (
            <div className={styles.openTime}>
                <TimeLeftComponent/>
                <span>Aukioloajat: </span>
                <span className={(weekDay === 1) ? styles.today : null}>Ma: 11.00 - 21.00</span>
                <span className={(weekDay === 2) ? styles.today : null}>Ti: 11.00 - 21.00</span>
                <span className={(weekDay === 3) ? styles.today : null}>Ke: 11.00 - 21.00</span>
                <span className={(weekDay === 4) ? styles.today : null}>To: 11.00 - 21.00</span>
                <span className={(weekDay === 5) ? styles.today : null}>Pe: 11.00 - 22.00</span>
                <span className={(weekDay === 6) ? styles.today : null}>La: 12.00 - 22.00</span>
                <span className={(weekDay === 7) ? styles.today : null}>Su: 12.00 - 21.00</span>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1834.5969372402867!2d27.120616251642616!3d62.624528349513206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4684db6948c87357%3A0xa425c9e1e9cf80e9!2sHerralantie+3%2C+77600+Suonenjoki!5e0!3m2!1sen!2sfi!4v1484248946314" width="600" height="380" frameBorder="0"></iframe>
                <div className={styles.contact}>
                    <span>Puhelin: 017-513030</span>
                    <span>Osoite: Herralantie 3</span>
                    <span>77600 SUONENJOKI</span>
                    <OpenTimeComponent/>
                </div>
            </div>
        );
    }
}

export default AboutComponent;
