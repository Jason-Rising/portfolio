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
        title: t("unimelb.title"),
        location: t("unimelb.location"),
        description: t("unimelb.description"),
        date: t("unimelb.date"),
        icon: <img src={UniMelbIcon}/>,
        isWork: false
    },
    {
        id: 3,
        title: t("xero-internship.title"),
        location: t("xero-internship.location"),
        description: t("xero-internship.description"),
        date: t("xero-internship.date"),
        icon: <img src={Xero}/>,
        isWork: true,
    },
    {
        id: 4,
        title: t("legendstudios.title"),
        location: t("legendstudios.location"),
        description: t("legendstudios.description"),
        date: t("legendstudios.date"),
        icon: <img src={LegendStudios}/>,
        isWork: true,

    },
    {
        id: 5,
        title: t("brytenwalda.title"),
        location: t("brytenwalda.location"),
        description: t("brytenwalda.description"),
        date: t("brytenwalda.date"),
        icon: <img src={BrytenwaldaStudios} />,
        isWork: true,
    }
];
}