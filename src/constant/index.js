import {accenture, allz, c, ibm, one, opn, u} from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    java,
    go,
    spring,
    python,
    mongodb,
    nodejs,
    react,
    redux,
    sass,
    typescript,
    aws,
    dota,
    elastic,
    intelij,
    kafka,
    kotlin,
    postgres,
    book,
    web,
    tail,
    cyp,
    docker,
    gitbook,
    gitlab,
    terraform, heroku, jenkins, kibana, k8s, mysql, nest, redis, ruby, sqlite, swagger, dynamodb, robot
} from "../assets/icons";

// programming language ,libray/framework/test , database/monitoring , queue , deploy/cloud , tools
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "programming language",
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        imageUrl: go,
        name: "Golang",
        type: "programming language",
        link: 'https://go.dev/'
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "programming language",
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        imageUrl: java,
        name: "Java",
        type: "programming language",
        link: 'https://www.java.com/en/'
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "programming language",
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "programming language",
        link: 'https://kotlinlang.org/'
    },
    {
        imageUrl: python,
        name: "Python",
        type: "programming language",
        link: 'https://www.python.org/'
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "programming language",
        link: 'https://www.typescriptlang.org/'
    },
    {
        imageUrl: cyp,
        name: "Cypress",
        type: "library or framework or test",
        link: 'https://www.cypress.io/'
    },
    {
        imageUrl: express,
        name: "Express",
        type: "library or framework or test",
        link: 'https://expressjs.com/'
    },
    {
        imageUrl: nest,
        name: "Nestjs",
        type: "library or framework or test",
        link: 'https://nestjs.com/'
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "library or framework or test",
        link: 'https://nodejs.org/en'
    },
    {
        imageUrl: react,
        name: "React",
        type: "library or framework or test",
        link: 'https://react.dev/'
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "library or framework or test",
        link: 'https://redux.js.org/'
    },
    {
        imageUrl: robot,
        name: "Robot Framework",
        type: "programming language",
        link: 'https://robotframework.org/'
    },
    {
        imageUrl: ruby,
        name: "Ruby on Rails",
        type: "library or framework or test",
        link: 'https://rubyonrails.org/'
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "library or framework or test",
        link: 'https://sass-lang.com/'
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "library or framework or test",
        link: 'https://spring.io/'
    },
    {
        imageUrl: tail,
        name: "Tailwind",
        type: "library or framework or test",
        link: 'https://tailwindcss.com/'
    },
    {
        imageUrl: dynamodb,
        name: "Dynamo DB",
        type: "database or monitoring",
        link: 'https://aws.amazon.com/th/pm/dynamodb/?trk=da3ca203-9906-45ed-8827-a11c3e7dc726&sc_channel=ps&ef_id=CjwKCAjw-JG5BhBZEiwAt7JR6w2uloppXm4IQ-lj1W2chpIwY9jWeQigBJru4oLQJo5c0Y0UtqDY9hoCiGoQAvD_BwE:G:s&s_kwcid=AL!4422!3!589053691163!e!!g!!dynamodb!16178327173!136912409887&gclid=CjwKCAjw-JG5BhBZEiwAt7JR6w2uloppXm4IQ-lj1W2chpIwY9jWeQigBJru4oLQJo5c0Y0UtqDY9hoCiGoQAvD_BwE'
    },
    {
        imageUrl: elastic,
        name: "Elastic",
        type: "database or monitoring",
        link: 'https://www.elastic.co/elasticsearch'
    },
    {
        imageUrl: kibana,
        name: "Kibana",
        type: "database or monitoring",
        link: 'https://www.elastic.co/kibana'
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "database or monitoring",
        link: 'https://www.mongodb.com/'
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "database or monitoring",
        link: 'https://www.mysql.com/'
    },
    {
        imageUrl: postgres,
        name: "Postgres",
        type: "database or monitoring",
        link: 'https://www.postgresql.org/'
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "database or monitoring",
        link: 'https://redis.io/'
    },
    {
        imageUrl: sqlite,
        name: "Sqlite",
        type: "database or monitoring",
        link: 'https://www.sqlite.org/'
    },
    {
        imageUrl: kafka,
        name: "Kafka",
        type: "queue",
        link: 'https://kafka.apache.org/'
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "cloud",
        link: 'https://aws.amazon.com/'
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "cloud",
        link: 'https://www.docker.com/'
    },
    {
        imageUrl: heroku,
        name: "Heroku",
        type: "cloud",
        link: 'https://www.heroku.com/'
    },
    {
        imageUrl: jenkins,
        name: "Jenkins",
        type: "cloud",
        link: 'https://www.jenkins.io/'
    },
    {
        imageUrl: k8s,
        name: "Kubernetes",
        type: "cloud",
        link: 'https://kubernetes.io/'
    },
    {
        imageUrl: terraform,
        name: "Terraform",
        type: "cloud",
        link: 'https://www.terraform.io/'
    },
    {
        imageUrl: git,
        name: "Git",
        type: "tools",
        link: 'https://git-scm.com/'
    },
    {
        imageUrl: gitbook,
        name: "GitBook",
        type: "tools",
        link: 'https://www.gitbook.com/'
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "tools",
        link: 'https://about.gitlab.com/'
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "tools",
        link: 'https://github.com/'
    },
    {
        imageUrl: intelij,
        name: "Intelij",
        type: "tools",
        link: 'https://www.jetbrains.com/idea/'
    },
    {
        imageUrl: swagger,
        name: "Swagger",
        type: "tools",
        link: 'https://swagger.io/'
    }
];

export const hobbies = [
    {
        imageUrl: dota,
        name: "Dota2",
        type: "Game",
    },
]
export const educations = [
    {
        title: "Internship of summer student training program",
        location_name: "National Central University Taiwan",
        icon: u,
        iconBg: "#fcdc23",
        date: "1 Jun - 31 July 2018",
        points: [
            "Designed and developed a real-time chat application using Kinect v2 for gesture-based interaction, utilizing websockets for communication and deployed on Heroku for cloud hosting."
        ],
    },
    {
        title: "Computer Science Bachelor Degree",
        location_name: "Kasetsart Univeristy",
        icon: c,
        iconBg: "#7ecdcf",
        date: "2015 - Jun 2019",
        points: [
            "I graduated with a bachelor's degree in Computer Science from Kasetsart University Bangkhen , Bangkok ."
        ],
    },
];

export const experiences = [
    {
        title: "Senior Backend Developer",
        company_name: "IBMDT",
        icon: ibm,
        iconBg: "#fffef7",
        date: "Jun 2024 - Present",
        points: [
            "Designed and implemented new features for the Biznext project, a mobile banking solution for\n" +
            "businesses.",
            "Investigated and resolved the issue to support our bank customer."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Opn",
        icon: opn,
        iconBg: "#accbe1",
        date: "Apr 2023 - Jun 2024",
        points: [
            "Designed and implemented new features for the project involving Payment Gateway as a Service\n" +
            "project.",
            "Investigated and resolved the issue on UAT to support our bank customer.",
            "Had the expertise and skills required to perform certification testing for Visa and Mastercard.",
            "Implemented and maintained functionalities related to authorization, settlement/clearing, and funding processes.",
            "Create a test automation script with Selenium and TestNG for API testing."
        ],
    },
    {
        title: "Senior Backend Developer",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#fffef7",
        date: "Aug 2020 - Apr 2023",
        points: [
            "Developed and maintained a new loan-related functionality on SCB Easy application.",
            "Developed and maintained new features for the Corporate Portal, specifically focusing on transaction\n" +
            "management within the company.",
            "Responsible for managing the Maemanee project, which involves integrating a merchant management\n" +
            "system with third-party shipping services.",
            "Created POC and implemented a graceful shutdown mechanism for the backend service, enabling it to handle pending processes consuming from Kafka.",
            "Created POC and implemented rate limit by using Envoy filter on Kubernetes.",
            "Create a test automation script with Robot framework for UI and API testing.",
            "Supported load test and investigated issue via Jaeger.",
            "Monitoring microservice utilization with Grafana.",
            "Investigated and resolved the issue on stage and production environment for all projects.",
            "Mentoring, advising, and reviewing code for junior developers in both business and technical aspects."
        ],
    },
    {
        title: "Backend Developer",
        company_name: "OnedayCat",
        icon: one,
        iconBg: "#b7e4c7",
        date: "Dec 2019 - Jun 2020",
        points: [
            "To be responsible for the project about e-commerce connecting with others platforms including Lazada and Shopee.",
            "Designed API by using Domain Driven Design (DDD).",
            "Design database schema in DynamoDB.",
            "Designed and implemented a system based on the Command Query Responsibility Segregation (CQRS)\n" +
            "concept, utilizing an Elasticsearch database.",
            "Configured Terraform for the CI/CD pipeline to facilitate the deployment of applications on AWS\n" +
            "Lambda.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Allianz",
        icon: allz,
        iconBg: "#a2d2ff",
        date: "July 2019 - November 2019",
        points: [
            "Developed a chatbot marketplace project incorporating Github OAuth2 for authentication and Node.js. Implemented automation for app deployment stages (CI/CD process) utilizing Jenkins and Docker on OpenShift.",
            "Migrated Jenkins from on premise server to docker container.",
        ],
    },
];

export const profiles = {
    githubUrl: "https://github.com/brightkut",
    linkedInUrl: "https://www.linkedin.com/in/disorn-thitikornkovit-565526186/",
    steamUrl: "https://steamcommunity.com/id/brightkuq/",
    instagramUrl: "https://www.instagram.com/brighteloy/"
}

export const projects = [
    {
        type: 'blog',
        iconUrl: book,
        theme: 'btn-back-red',
        name: 'Gamer to Coder เด็กติดเกมสู่เด็กติดโค้ด',
        description: 'บทความเกี่ยวกับความเป็นมาและแรงบันดาลใจ ในการมาเป็น Software Engineer ',
        link: 'https://medium.com/@dsorn2/gamer-to-coder-%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94-7029744fdcc7',
    },
    {
        type: 'blog',
        iconUrl: book,
        theme: 'btn-back-green',
        name: 'Docker #1 วาฬน้อยแสนหรรษา',
        description: 'บทความอธิบายเกี่ยวกับ Docker เบื้องต้น #1',
        link: 'https://medium.com/@dsorn2/docker-1-%E0%B8%A7%E0%B8%B2%E0%B8%AC%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%AB%E0%B8%A3%E0%B8%A3%E0%B8%A9%E0%B8%B2-b149dc493812',
    },
    {
        type: 'blog',
        iconUrl: book,
        theme: 'btn-back-blue',
        name: 'มาใช้ Docker กันเถอะ #2',
        description: 'บทความอธิบายเกี่ยวกับ Docker เบื้องต้น #2 ในส่วนของ workshop การใช้เบื้องต้น',
        link: 'https://medium.com/@dsorn2/%E0%B8%A1%E0%B8%B2%E0%B9%83%E0%B8%8A%E0%B9%89-docker-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-2-d41a02d1ad70',
    },
    {
        type: 'blog',
        iconUrl: book,
        theme: 'btn-back-pink',
        name: 'Dependency Injection (DI) และ Inversion of Control (IOC)',
        description: 'บทความอธิบายเกี่ยวกับ DI และ IOC',
        link: 'https://medium.com/@dsorn2/dependency-injection-di-%E0%B9%81%E0%B8%A5%E0%B8%B0-inversion-of-control-ioc-6bb8341dd40b',
    },
    {
        type: 'blog',
        iconUrl: book,
        theme: 'btn-back-black',
        name: 'ได้ยินบ่อยจังคือไรน้า” มารู้จัก Kubernetes กัน #1',
        description: 'บทความอธิบายเกี่ยวกับ Kubernetes',
        link: 'https://medium.com/@dsorn2/%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A2%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B9%84%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-kubernetes-%E0%B8%81%E0%B8%B1%E0%B8%99-1-5618ef507bdd',
    },
    {
        type: 'web',
        iconUrl: web,
        theme: 'btn-back-yellow',
        name: 'Dev 7 Days',
        description: 'This site is a collection of my programming knowledge and learning journey.',
        link: 'https://dev7days.gitbook.io/dev7days/',
    }
];