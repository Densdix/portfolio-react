import React, { useEffect, useRef, useState } from 'react'
import sunImg from './../../assets/theme/sun.svg'
import moonImg from './../../assets/theme/moon.svg'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {

    const [darkMode, setDarkMode] = useState('light')
    // const btnRef = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            // btnRef.current?.classList.add(s['dark-mode-btn--active'])
        } else {
            document.body.classList.remove('dark')
            // btnRef.current?.classList.remove(s['dark-mode-btn--active'])
        }
    }, [darkMode])


    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }



    return (
        <>
            <nav className="py-[20px] px-0 bg-[var(--nav-bg)] border border-solid border-[var(--nav-border)] tracking-normal">
                <div className="max-w-[1200px] my-0 mx-auto p-0 px-[15px]">
                    <div className="flex justify-end max-sm:justify-between items-center gap-x-[30px] gap-y-[20px] flex-wrap font-poppins">
                        <NavLink to="/" className="mr-auto text-[var(--nav-text)] text-[24px] font-poppins"><strong>Dev</strong> portfolio</NavLink>

                        <button
                            onClick={toggleDarkMode}
                            className={darkMode === 'dark' ? `${s['dark-mode-btn']} ${s['dark-mode-btn--active']}` : s['dark-mode-btn']}>
                            <img src={sunImg} alt="Light mode" className={s['dark-mode-btn__icon']} />
                            <img src={moonImg} alt="Dark mode" className={s['dark-mode-btn__icon']} />
                        </button>

                        <ul className="flex flex-wrap gap-y-[10px] gap-x-[40px] items-center text-[16px] font-medium">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-indigo-500' : 'text-[var(--nav-text)]'}>Home</NavLink></li>
                            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'text-indigo-500' : 'text-[var(--nav-text)]'}>Projects</NavLink></li>
                            <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'text-indigo-500' : 'text-[var(--nav-text)]'}>Contacts</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar