import { Tech } from "./";

export class Techs {
    static typescript: Tech = {
        name: "TypeScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    }
    static javascript: Tech = {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    }
    static python: Tech = {
        name: "Python",
        image: "https://www.python.org/static/community_logos/python-logo.png"
    }
    static nextjs: Tech = {
        name: "Next.js",
        image: "https://assets.vercel.com/image/upload/v1682139614/front/nextjs/next-js-logo.svg"
    }
    static nodejs: Tech = {
        name: "Node.js",
        image: "https://nodejs.org/static/images/logo.svg"
    }
    static expressjs: Tech = {
        name: "Express.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
    }
    static nestjs: Tech = {
        name: "Nest.js",
        image: "https://nestjs.com/img/logo-small.svg"
    }
    static turborepo: Tech = {
        name: "Turborepo",
        image: "https://seeklogo.com/images/T/turborepo-logo-3173953D63-seeklogo.com.png"
    }
    static postgres: Tech = {
        name: "PostgreSQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
    }
    static fastapi: Tech = {
        name: "FastAPI",
        image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    static flask: Tech = {
        name: "Flask",
        image: "https://flask.palletsprojects.com/en/2.2.x/_images/flask-logo.png"
    }
    static django: Tech = {
        name: "Django",
        image: "https://static.djangoproject.com/img/logos/django-logo-negative.svg"
    }
    static mongodb: Tech = {
        name: "MongoDB",
        image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
    }
    static prisma: Tech = {
        name: "Prisma",
        image: "https://www.prisma.io/images/branding/prisma-logo-light.svg"
    }
    static githubActions: Tech = {
        name: "GitHub Actions",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Actions-Logo.png"
    }
    static redis: Tech = {
        name: "Redis",
        image: "https://redis.io/images/redis-white.png"
    }
    static prometheus: Tech = {
        name: "Prometheus",
        image: "https://prometheus.io/assets/prometheus_logo_gopher.png"
    }
    static grafana: Tech = {
        name: "Grafana",
        image: "https://grafana.com/static/img/menu/grafana_icon.svg"
    }
    static loki: Tech = {
        name: "Loki",
        image: "https://grafana.com/static/img/plugins/loki/loki_icon.svg"
    }
}


export const Projects = [
    {
        name: "Plangen",
        description: "AI powered career roadmap, resources and mentor platform",
        image: "https://cdn.dribbble.com/userupload/45904416/file/49c5045033ec70881d16d388408d6ede.png?resize=1024x768&vertical=center",
        points: [
            {
                point: "Launched AI-driven platform recommending personalized career paths",
                index: 1,
                underline: "AI-driven personalized paths"
            },
            {
                point: "Built scalable backend with multi-service architecture and 99.9% uptime",
                index: 2,
                underline: "Scalable backend & uptime"
            },
            {
                point: "Automated CI/CD with GitHub Actions and Terraform for seamless deployments",
                index: 3,
                underline: "Automated CI/CD & deployments"
            },
            {
                point: "Optimized API and database queries, reducing response times by 40%",
                index: 4,
                underline: "Optimized API & database"
            },
            {
                point: "Implemented secure authentication (JWT, bcrypt) and real-time monitoring (Prometheus, Grafana)",
                index: 5,
                underline: "Secure auth & monitoring"
            },
            {
                point: "Integrated AI mentoring suggestions and resource recommendations for users",
                index: 6,
                underline: "AI mentoring & resources"
            }
        ],
        github: "https://github.com/brogrammercode/PlanGen",
        web: "https://letsplangen.vercel.app/",
        techs: [
            Techs.javascript, Techs.typescript, Techs.python, Techs.nodejs,
            Techs.expressjs, Techs.fastapi, Techs.postgres, Techs.prisma,
            Techs.mongodb, Techs.githubActions, Techs.prometheus, Techs.grafana, Techs.loki
        ]
    },
    {
        name: "Plangen",
        description: "AI powered career roadmap, resources and mentor platform",
        image: "https://cdn.dribbble.com/userupload/45904416/file/49c5045033ec70881d16d388408d6ede.png?resize=1024x768&vertical=center",
        points: [
            {
                point: "Launched AI-driven platform recommending personalized career paths",
                index: 1,
                underline: "AI-driven personalized paths"
            },
            {
                point: "Built scalable backend with multi-service architecture and 99.9% uptime",
                index: 2,
                underline: "Scalable backend & uptime"
            },
            {
                point: "Automated CI/CD with GitHub Actions and Terraform for seamless deployments",
                index: 3,
                underline: "Automated CI/CD & deployments"
            },
            {
                point: "Optimized API and database queries, reducing response times by 40%",
                index: 4,
                underline: "Optimized API & database"
            },
            {
                point: "Implemented secure authentication (JWT, bcrypt) and real-time monitoring (Prometheus, Grafana)",
                index: 5,
                underline: "Secure auth & monitoring"
            },
            {
                point: "Integrated AI mentoring suggestions and resource recommendations for users",
                index: 6,
                underline: "AI mentoring & resources"
            }
        ],
        github: "https://github.com/brogrammercode/PlanGen",
        web: "https://letsplangen.vercel.app/",
        techs: [
            Techs.javascript, Techs.typescript, Techs.python, Techs.nodejs,
            Techs.expressjs, Techs.fastapi, Techs.postgres, Techs.prisma,
            Techs.mongodb, Techs.githubActions, Techs.prometheus, Techs.grafana, Techs.loki
        ]
    }
]
