import React from 'react'
import sunImg from './../../assets/theme/sun.svg'
import moonImg from './../../assets/theme/moon.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="py-[20px] px-0 bg-[var(--nav-bg)] border border-solid border-[var(--nav-border)] tracking-normal">
                <div className="max-w-[1200px] my-0 mx-auto p-0 px-[15px]">
                    <div className="flex justify-end max-sm:justify-between items-center gap-x-[30px] gap-y-[20px] flex-wrap font-poppins">
                    <NavLink to="/" className="mr-auto text-[var(--nav-text)] text-[24px] font-poppins"><strong>Dev</strong> portfolio</NavLink>

                        <button className="relative flex justify-between w-[51px] h-[26px] p-[5px] rounded-full order-9 max-sm:order-none bg-[#272727]">
                            <img src={sunImg} alt="Light mode" className="relative z-[9]" />
                            <img src={moonImg} alt="Dark mode" className="relative z-[9]" />
                        </button>

                        <ul className="flex flex-wrap gap-y-[10px] gap-x-[40px] items-center text-[16px] font-medium">
                            <li className="nav-list__item"><NavLink to='/' className="text-[var(--nav-text)] transition nav-list__link--active">Home</NavLink></li>
                            <li className="nav-list__item"><NavLink to="/projects" className="text-[var(--nav-text)] transition">Projects</NavLink></li>
                            <li className="nav-list__item"><NavLink to="/contacts" className="text-[var(--nav-text)] transition">Contacts</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar