import Link from "next/link";
import classes from "./main-header.module.css"

import logoImg from '@/assets/logo.png';
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "../nav-link/nav-link";

const MainHeader = () => {
    return (<>
        <HeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals" >Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community" >Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>);
}

export default MainHeader;