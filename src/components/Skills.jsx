export const Skills = ({ skills }) => {
    return (
        <div>
            <div className='skills'>
                <p>Skills</p>
            </div>
            <div>
                <div className="skill">Frontend</div>
                <ul className="list-skill">
                    {skills.frontend.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="skill">Tools</div>
                <ul className="list-skill">
                    {skills.tools.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {skills.cloud.map((platformCloud, index) => (
                    <div key={index}>
                        <div className="skill">{platformCloud.platform}</div>
                        <ul className="list-skill">
                            {platformCloud.service.map((item, serviceIndex) => (
                                <li key={serviceIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};