"use client";

import "./globals.css";
import styles from './page.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import headImage from './images/head.jpg';
import dreamlogImage from './images/DreamLog.png';
import JSFightingGame from './images/JSFightingGame.png'
import RoguelikeGame from './images/RoguelikeGame.png'
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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert('Error sending message. Please try again.');
        }
    };

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
                <Image src={headImage} alt="Chris Kim" className={styles.headImage} />                <h2 id="skills">A passionate Programmer capable of using but not limited to:</h2>
                <div className={styles.importantSkills}>
                    {importantSkills.map((skill, index) => (
                        <div key={index} className={styles.importantSkillItem}>
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
                <a href="/Juhyun_Kim_Resume.pdf"  download="Juhyun_Kim_Resume.pdf" className={styles.downloadButton}>
                    Download Resume
                </a>
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
                            <li key={index} className={styles.skillItem}>
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
                    <div className={styles.projectright}>
                        <div className={styles.projectInfo}>
                            <h2>Game Dev Project: Hack and Slash Game</h2>
                            <p>
                                A Hack and Slash game made using Godot Game engine and C++
                                using my own sprites
                            </p>
                            <a href={"https://drive.google.com/drive/folders/1G_3T5NUD6mYlmVYiX9zbQDImapYNo4Cx?usp=sharing"} >
                                <div className={styles.projectLink}>
                                    Download
                                </div>
                            </a>
                        </div>
                        <Image src={RoguelikeGame} alt="Roguelike Game" className={styles.projectImage}/>
                    </div>


                    <div className={styles.projectleft}>
                        <Image src={dreamlogImage} alt="Dream Log" className={styles.projectImage}/>
                        <div className={styles.projectInfo}>
                            <h2>Web dev Project: Dream Log</h2>
                            <p>
                                A Journaling website made with Next.js and firebase that allows users to
                                write journals and reflect on them through statistics
                            </p>
                            <a href={"https://dreamlog-snowy.vercel.app/"} >
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
                            <a href={"https://browser-game-two.vercel.app/"} >
                                <div className={styles.projectLink}>
                                    Live App
                                </div>
                            </a>
                        </div>
                        <Image src={JSFightingGame} alt="JS Fighting Game" className={styles.projectImage}/>
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
            </div>
            <div className={styles.background}>Background Text</div>
        </div>
    );
};
export default App;
