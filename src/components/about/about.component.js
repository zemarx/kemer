import * as React from 'react'
import ContactForm from './../contactForm/contactForm.component';
import styles from './about.component.css'

const openCloseTime = [
    {},
    {openTime: {hours: 11, minutes: 0, seconds: 0}, closeTime: {hours: 21, minutes: 0, seconds: 0}},
    {openTime: {hours: 11, minutes: 0, seconds: 0}, closeTime: {hours: 21, minutes: 0, seconds: 0}},
    {openTime: {hours: 11, minutes: 0, seconds: 0}, closeTime: {hours: 21, minutes: 0, seconds: 0}},
    {openTime: {hours: 11, minutes: 0, seconds: 0}, closeTime: {hours: 21, minutes: 0, seconds: 0}},
    {openTime: {hours: 11, minutes: 0, seconds: 0}, closeTime: {hours: 22, minutes: 0, seconds: 0}},
    {openTime: {hours: 12, minutes: 0, seconds: 0}, closeTime: {hours: 22, minutes: 0, seconds: 0}},
    {openTime: {hours: 12, minutes: 0, seconds: 0}, closeTime: {hours: 21, minutes: 0, seconds: 0}},
];

const formatNumber = (number) => {
    number = number + "";
    if (number.length == 1) return "0" + number;
    return number
}

const computeTimeToClose = (closeTime, currentTime) => {
    currentTime.setHours(closeTime.hours - currentTime.getHours());
    currentTime.setMinutes(59 - currentTime.getMinutes());
    currentTime.setSeconds(59 - currentTime.getSeconds());
    
    return currentTime;
}

const computeTimeToOpen = () => {

}


class TimeLeftComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
            isOpen: true,
            updateTimeLeftInterval: null,
            checkOpenClosedInterval: null
        };
    }

    componentDidMount () {
        this.setState({
            updateTimeLeftInterval: setInterval(() => {
                let currentTime = new Date();
                let openTime = openCloseTime[currentTime.getDay()]['openTime'];
                let closeTime = openCloseTime[currentTime.getDay()]['closeTime'];

                if (this.state.isOpen) {
                    this.setState({ time: computeTimeToClose(closeTime, currentTime) })
                } else if (!this.state.isOpen) {
                    this.setState({ time: computeTimeToOpen(openTime, currentTime) })
                }
            }, 1000), 
            checkOpenClosedInterval: setInterval(() => {
                // console.log('Checking if pizzeria is open');
                let currentDate = new Date();
                let openTime = openCloseTime[currentDate.getDay()]['openTime'];
                let closeTime = openCloseTime[currentDate.getDay()]['closeTime'];

                let hoursNow = currentDate.getHours();

                if (hoursNow > openTime.hours && hoursNow < closeTime.hours) {
                    this.setState({ isOpen: true });
                } else {
                    this.setState({ isOpen: false });
                }
            }, 1000) // TODO: set to 60000, so it doesn't check it too often without a reason.
        })
    }

    componentWillUnmount () {
        clearInterval(this.state.updateTimeLeftInterval);
        clearInterval(this.state.checkOpenClosedInterval);
    }

    render () {
        let time = (this.state.isOpen) ? `Sulkeutuu ${this.state.time} päästä` : `Aukeamiseen vielä: ${this.state.time}`

        return (
            <div className={styles.showTimeText}>
                {time}
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


                <ContactForm />

            </div>
        );
    }
}

export default AboutComponent;
