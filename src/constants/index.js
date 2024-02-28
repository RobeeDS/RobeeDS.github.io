//Import assets here
import { testImage, htmlLogo, cssLogo, jsLogo, reactLogo, justplayit, hoobank, firstPortfolio, tailwindLogo, bootstrapLogo } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "home",
    },
    {
        id: "about",
        title: "about",
    },
    {
        id: "portfolio",
        title: "portfolio",
    },
    {
        id: "contact",
        title: "contact",
    },
];

export const projectInfo = [
    {
        title: "First ePortfolio",
        num: "1",
        langs: ["HTML", "BootstrapCSS", "JavaScript"],
        content: "My first ePortfolio. Made from scratch using the BootstrapCSS framework. ",
        img: firstPortfolio,
        link: "https://github.com/robeeds/old_eportfolio",
    },
    {
        title: "HooBank",
        num: "2",
        langs: ["HTML", "TailwindCSS", "React.js"],
        content: "A project clone of @adrianhajdin's project_hoobank on GitHub. Made from scratch and deployed on Vercel. Responsive to all screen sizes.",
        img: hoobank,
        link: "https://bank-modern-app-robeeds-projects.vercel.app/",
    },
    {
        title: "Just Play It!",
        num: "3",
        langs: ["HTML", "CSS"],
        content: "My very first ECS Front-End Web Development Project in 2020-2021. Collaboratively built, with @DVLS through HTML and CSS using Atom. Not very functional, or responsive...",
        img: justplayit,
        link: "hhttps://github.com/robeeds/JustPlayIt",
    }
];

export const techInfo = [
    {
        lang: "HTML",
        img: htmlLogo,
    },
    {
        lang: "CSS",
        img: cssLogo,
    },
    {
        lang: "JavaScript",
        img: jsLogo,
    },
    {
        lang: "React",
        img: reactLogo,
    },
    {
        lang: "Tailwind",
        img: tailwindLogo,
    },
    {
        lang: "Bootstrap",
        img: bootstrapLogo,
    }
];