"use client";

import "./globals.css";
import styles from './page.module.css';
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
            <div className={`${styles.sidemenu} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li>
                        <a href="#header"><IoMdHome /></a>
                        <span className={styles.tooltip}>About</span>
                    </li>
                    <li>
                        <a href="#skills"><SiHyperskill /></a>
                        <span className={styles.tooltip}>Skills</span>
                    </li>
                    <li>
                        <a href="#projects"><GoProject /></a>
                        <span className={styles.tooltip}>Projects</span>
                    </li>
                    <li>
                        <a href="#contacts"><RiContactsBook2Fill /></a>
                        <span className={styles.tooltip}>Contacts</span>
                    </li>
                </ul>
                <div className={styles.arrow} onClick={toggleMenu}>
                    <span>{isOpen ? ' < ' : ' > '}</span>
                </div>
            </div>


            <div className={styles.header} id="header">
                <h1>This is Chris Kim!</h1>
                <img src={headImage} alt="Chris Kim" className={styles.headImage} />
                <h2 id="skills">A passionate Programmer capable of using but not limited to:</h2>
                <div className={styles.importantSkills}>
                    {importantSkills.map((skill, index) => (
                        <div key={index} className={styles.importantSkillItem}>
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
                <a href="/resume.pdf" download className={styles.downloadButton}>Download Resume</a>
                <input
                    id="skills"
                    type="text"
                    placeholder="Search for other skills Chris knows!"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.searchBar}
                />
                <div className={styles.skillsList}>
                    <ul>
                        {filteredSkills.map((skill, index) => (
                            <li key={index} className={styles.skillsItem}>
                                {skill.icon} {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.triangle1}></div>
            <div className={styles.triangle2}></div>
            <div className={styles.body}>
                <div className={styles.projects} id="projects">
                    <div className={styles.projectleft}>
                        <img src={dreamlogImage}/>
                        <div className={styles.projectInfo}>
                            <h2>Web dev Project: Dream Log</h2>
                            <p>
                                A Journaling website made with Next.js and firebase that allows users to
                                write journals and reflect on them through statistics
                            </p>
                            <a href={""} >
                                <div className={styles.projectLink}>
                                    Live App
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={styles.projectright}>
                        <div className={styles.projectInfo}>
                            <h2>Game Dev Project: 1v1 Fighting Game</h2>
                            <p>
                                A 1 vs 1 fighting game made in Javascript that can be played
                                through a browser. Has multiple characters, moveset and more.
                            </p>
                            <a href={""} >
                                <div className={styles.projectLink}>
                                    Live App
                                </div>
                            </a>
                        </div>
                        <img src={dreamlogImage}/>
                    </div>
                </div>
            </div>

            <h1>Contact Chris!</h1>
            <div className={styles.contact} id="contacts">
                <div className={styles.links}>
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
                        className={styles.contactInput}
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className={styles.contactInput}
                        required
                    />
                    <textarea
                        name="message"
                        row="6"
                        placeholder="Your Message"
                        className={styles.contactInput}
                        required
                    ></textarea>
                    <button className={styles.button} type="submit">Send Message</button>
                </form>
            </div>
            <div className={styles.background}>helo</div>
        </div>
    );
}

export default App;
