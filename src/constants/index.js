//Import assets here
import { htmlLogo, cssLogo, jsLogo, reactLogo, hoobank, firstPortfolio, botanicbento, tailwindLogo, bootstrapLogo } from "../assets";

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
        title: "Botanic Bento",
        num: "3",
        langs: ["HTML", "TailwindCSS", "React.js"],
        content: "React-based site with Tailwind CSS for a seamless, stylish exploration of nature-inspired decor. Deployed on Vercel and responsive to all screen sizes.",
        img: botanicbento,
        link: "https://botanic-bento.vercel.app",
    },
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