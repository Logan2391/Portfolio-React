import LogansList from './images/LogansList.png';
import CurrConv from './images/currencyConvertorProject.png';
import Weather from './images/screenshot.weather.png';
import Team from './images/screenshot team.png';
import Schedule from './images//Schedule.png';

const projects = [
    {
        name: 'Logans List',
        image: LogansList,
        description: `Logan's List is a website that allows users to sell all their "L" categoried
        items and contact others to purchase them. Its easy to use design and simplified categories
        aren't as overwelming as other classifed resale sites. This project was intended to display
        our knowledge of SSR. Although it lacks more complex functionality it shows our base
        understanding of SSR concepts.`,
        repo: "https://github.com/treavorwills/logans-list/tree/main",
        liveSite: "https://aqueous-sea-47353.herokuapp.com/" ,
        id: 'First slide'
    },
    {
        name: 'Currency Convertor',
        image: CurrConv,
        description: `This application allows you to choose from almost any currency in the
        world and convert it to another along with presenting you with locations near you that may
        facilitate your desired exchange. The exchange rates are updated every sixty seconds to
        provide the
        most accurate rate availible.(not optimized for mobile)`,
        repo: "https://github.com/Logan2391/updatedExchange",
        liveSite: "https://logan2391.github.io/updatedExchange/",
        id: 'Second slide' 
    },
    {
        name: 'Weather Dashboard',
        image: Weather,
        description: `With this webpage you're be able to search any city or country in the world
        and get corresponding current and future weather data.(not optimized for mobile)`,
        repo: "https://github.com/Logan2391/WeatherDashboard",
        liveSite: "https://logan2391.github.io/WeatherDashboard/" ,
        id: 'Third slide'
    },
    {
        name: 'Team Profile Generator',
        image: Team,
        description: `With this application you're able to generate a custom html file with your
        teams credentials via command line inputs.(not optimized for mobile)`,
        repo: "https://github.com/Logan2391/TeamProfileGenerator",
        liveSite: 'https://www.youtube.com/watch?v=JrCdS4HvoNU&t',
        id: 'Fourth slide'
    },
    {
        name: 'Scheduler',
        image: Schedule,
        description: `With this application you're able to add, remove, or save diffrent scheduled
        plans you have
        throughout the day.(not optimized for mobile)`,
        repo: "https://github.com/Logan2391/Scheduler",
        liveSite: "https://logan2391.github.io/Scheduler/",
        id: 'Fifth slide'
    }
]

export default projects;
