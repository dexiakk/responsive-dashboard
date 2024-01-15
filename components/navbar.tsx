import HamburgerButton from "./hamburgerButton"

export default function NavBar() {

    return (
        <nav className="flex justify-between w-full">
            <div className="flex">
                <HamburgerButton />
                <img className="w-4" src="/img/logo.png" alt="logo" />
            </div>
            <div className="flex">
                <div className="flex">
                    <span>Support</span>
                    <img src="/img/arrow.png" alt="arrow-down" />
                </div>
                <div className="flex">
                    <img src="/img/user.png" alt="user-icon" />
                    <img src="/img/arrow.png" alt="arrow-down" />
                </div>
            </div>
        </nav>
    )
}