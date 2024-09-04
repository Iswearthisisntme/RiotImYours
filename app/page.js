"use client";

import styles from "./globals.css";
import React, { useState } from 'react';
import headImage from "@/public/head.jpg";
import dreamlogImage from "@/public/pic01.jpg";
import { FaJava, FaPython, FaJs, FaReact, FaUnity, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiGodotengine, SiBlender, SiAdobeillustrator, SiAdobephotoshop, SiHyperskill } from 'react-icons/si';
import { PiYarn } from 'react-icons/pi';
import { IoMdHome } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { MdEmail } from "react-icons/md";

function App() {
    const importantSkills = [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Javascript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
    ];

    const skills = [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Javascript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Godot', icon: <SiGodotengine /> },
        { name: 'Unity', icon: <FaUnity /> },
        { name: 'Blender', icon: <SiBlender /> },
        { name: 'Yarn', icon: <PiYarn /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator/>},
        { name: 'Photoshop', icon: <SiAdobephotoshop/>}
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSkills = skills.filter(skill =>
                                             skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.page}>
            <div className={`sidemenu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#header"><IoMdHome /></a><span className={"tooltip"}>About</span></li>
                    <li><a href="#skills"><SiHyperskill /></a><span className={"tooltip"}>Skills</span></li>
                    <li><a href="#projects"><GoProject /></a><span className={"tooltip"}>Projects</span></li>
                    <li><a href="#contacts"><RiContactsBook2Fill /></a><span className={"tooltip"}>Contacts</span></li>
                </ul>
                <div className={styles.arrow}>
                    <span>{isOpen ? ' < ' : ' > '}</span>
                </div>
            </div>

            <div className={styles.header} id="header">
                <h1>This is Chris Kim!</h1>
                <img src={headImage} alt="Chris Kim" className={styles.headImage} />
                <h2 id="skills">A passionate Programmer capable of using but not limited to:</h2>
                <div className="important-skills">
                    {importantSkills.map((skill, index) => (
                        <div key={index} className="important-skill-item">
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
                <a href="/resume.pdf" download className="download-button">Download Resume</a>
                <input
                    id="skills"
                    type="text"
                    placeholder="Search for other skills Chris knows!"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                <div className="skills-list">
                    <ul>
                        {filteredSkills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                {skill.icon} {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="triangle1"></div>
            <div className="triangle2"></div>
            <div className="body">
                <div className="projects" id="projects">
                    <div className={"projectleft"}>
                        <img src={dreamlogImage}/>
                        <div className={"projectInfo"}>
                            <h2>Web dev Project: Dream Log</h2>
                            <p>
                                A Journaling website made with Next.js and firebase that allows users to
                                write journals and reflect on them through statistics
                            </p>
                            <a href={""} >
                                <div className={"projectLink"}>
                                    Live App
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={"projectright"}>
                        <div className={"projectInfo"}>
                            <h2>Game Dev Project: 1v1 Fighting Game</h2>
                            <p>
                                A 1 vs 1 fighting game made in Javascript that can be played
                                through a browser. Has multiple characters, moveset and more.
                            </p>
                            <a href={""} >
                                <div className={"projectLink"}>
                                    Live App
                                </div>
                            </a>
                        </div>
                        <img src={dreamlogImage}/>
                    </div>
                </div>
            </div>

            <h1>Contact Chris!</h1>
            <div className="contact" id="contacts">
                <div className={"links"}>
                    <p>
                        <a href="mailto:jhkimuniversity@gmail.com"><MdEmail/> jhkimuniversity@gmail.com</a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                    </p>
                </div>
                <form name="msgme">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="contact-input"
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="contact-input"
                        required
                    />
                    <textarea
                        name="message"
                        row="6"
                        placeholder="Your Message"
                        className="contact-input"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className={"background"}>helo</div>
        </div>
    );
}

export default App;
