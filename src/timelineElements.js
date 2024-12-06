import UniMelbIcon from "./assets/icons/unimelb.svg"
import Xero from "./assets/icons/xero.svg"
import BrytenwaldaStudios from "./assets/icons/brytenwalda-studios.svg"
import LegendStudios from './assets/icons/legend-studios.svg';

export const ProjectTimeLineElements = (t) => { return [
    {
        id: 1,
        title: t("xero.title"),
        location: t("xero.location"),
        description: t("xero.description"),
        date: t("xero.date"),
        icon: <img src={Xero}/>,
        isWork: true,

    },
    {
        id: 2,
        title: "Bachelor of Design - Computing",
        location: "University of Melbourne - AU",
        description: "Studied at the University of Melbourne majoring in computer science.",
        date: "2019 - 2021",
        icon: <img src={UniMelbIcon}/>,
        isWork: false
    },
    {
        id: 3,
        title: "Software Engineer - Internship",
        location: "Xero",
        description: "Rotated with Developer Evangelism team in Xero. Managed Xero SDK, supported company integrations to the Xero marketplace",
        date: "Nov  2020 - Feb 2021",
        icon: <img src={Xero}/>,
        isWork: true,
    },
    {
        id: 4,
        title: "Software Engineer & Environment Artist",
        location: "Legend Studios",
        description: "Freelance game dev work for US based company Legend Studios. Developed environment assets and systems.",
        date: "2020 - 2021",
        icon: <img src={LegendStudios}/>,
        isWork: true,

    },
    {
        id: 5,
        title: "Software Engineer & Environment Artist",
        location: "Brytenwalda Studios",
        description: "Freelance game dev work for Spainsh based company Brytenwalda Studios. Developed environment assets and systems.",
        date: "2018 - 2019",
        icon: <img src={BrytenwaldaStudios}/>,
        isWork: true,

    }
];
}