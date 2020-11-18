import Gamle from '../img/projectGamle.PNG';
import FirstPortfolio from '../img/projectFirstPortfolio.PNG';
import Converter from '../img/projectConverter.jpg';
import Monitoring from '../img/projectMonitoring.jpg';
import Travel from '../img/projectTravel.jpg';
import CV from '../staticFiles/FR - CV - EDDAHABI Riad-min.pdf';

export const MenuItems = [
    {
        title:'About',
        url:'#About',
        cName:'nav-links first-link'
    },
    {
        title:'Experience',
        url:'#Experience',
        cName:'nav-links'
    },
    {
        title:'Work',
        url:'#Projects',
        cName:'nav-links'
    },
    {
        title:'Contact',
        url:'#Contact',
        cName:'nav-links'
    },
    {
        title:'Resume',
        url:CV,
        cName:'nav-links-mobile'
    }
]

export const SocialItems = [
    {
        title:'LinkedIn',
        url:'#',
        cName:'fab fa-linkedin-in socialLink'
    },
    {
        title:'Behance',
        url:'#',
        cName:'fab fa-behance socialLink'
    },
    {
        title:'GitHub',
        url:'#',
        cName:'fab fa-github socialLink'
    }
]

export const TechItems = [
    {
        title:'React',
        cName:'fab fa-react techItem'
    },
    {
        title:'HTML5',
        cName:'fab fa-html5 techItem'
    },
    {
        title:'CSS3',
        cName:'fab fa-css3-alt techItem'
    },
    {
        title:'Java',
        cName:'fab fa-java techItem'
    },
    {
        title:'Python',
        cName:'fab fa-python techItem'
    },
    {
        title:'Javascript',
        cName:'fab fa-js techItem'
    },
]

export const JobItems = [
    {
        companyName:'Forum Organisation',
        position:'Head of IT',
        dates:'March 2020 - March 2021',
        jobDescription:'Managing a team of 6, I had the opportunity to maintain the organization platform (www.forumorg.org), implement a digital marketing strategy (SEO, ...), implement BI tools (Tableau, Hubspot ...), and organize the "Coding Contest".'
    },
    {
        companyName:'Projets & Performance',
        position:'CRM Consultant',
        dates:'June 2020 - July 2020',
        jobDescription:'Adapting & Improving Microsoft Dynamics CRM to the clients needs'
    },
    {
        companyName:'Renault',
        position:'Mechanic Intern',
        dates:'July 2018',
        jobDescription:'Discovering the worker field, and a mechanician job.'
    }
]

export const ProjectsItems = [
    {
        projectName:'Gamle',
        projectType:'Web development',
        techUsed:'HTML CSS Javascript Bootstrap Sparql',
        github:'#',
        production:'#',
        image: Gamle,
        projectDescription:"A web semantic project. This project is a little search engine that will able you to get some informations about any game you want. It uses DBpedia library data, accessed with some Sparql requests. There's also an API call since DBpedia doesn't have much images"
    },
    {
        projectName:'First Portfolio',
        projectType:'Web development',
        techUsed:'HTML CSS Javascript Bootstrap',
        github:'#',
        production:'#',
        image: FirstPortfolio,
        projectDescription:"This is the first portfolio I've ever done. "
    },
    {
        projectName:'Travel Manager',
        projectType:'Software development',
        techUsed:'C++',
        github:'#',
        production:'#',
        image: Travel,
        projectDescription:"A travel manager in C++. You can import a travel plan from a csv file, and you can edit it (add or delete travels), and generate a new CSV file."
    },
    {
        projectName:'Price Monitor',
        projectType:'Web scraping',
        techUsed:'Python BeautifulSoup',
        github:'#',
        production:'#',
        image: Monitoring,
        projectDescription:"An automate project using Python. It tracks the price of a product (in this case an Amazon Monitor) and sends an email everytime the price drops below a certain price"
    },
    {
        projectName:'Currency Converter',
        projectType:'Web scraping',
        techUsed:'Python BeautifulSoup',
        github:'#',
        production:'#',
        image: Converter,
        projectDescription:"Using Python & BeautifulSoup, you can convert an amount of money in a currency to another currency. The rates come from a website and the data is gathered through web scraping"
    }
]