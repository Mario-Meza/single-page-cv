import { ProfileInfo } from './ProfileInfo.jsx';
import { Skills } from './Skills.jsx';
import { Education } from './Education.jsx';
import { Experience } from './Experience.jsx';

// Nested object with properties: frontend,tool and cloud
const skills = {
    // array de string
    frontend: ["React", "Javascript", "Typescript", "Tailwind", "bootstrap"],
    // arrays de strings
    tools: ["Git", "Github", "Postman"],
    // array de objetos
    cloud: [
        {
            // propiedad
            platform: "Azure",
            // array de strings
            service: [
                "Storage accounts",
                "App service",
                "Search service",
                "Azure Database PostgreSQL-Flexible server",
                "Docker Container Registry",
                "Azure Open AI"
            ]
        }
    ]
};

export const IndexComponent = () => {
    return (
        <>
            <div className='min-h-screen'>
                <ProfileInfo />
                <Skills skills={skills} />
                <Education />
                <Experience />
            </div>
        </>
    );
};