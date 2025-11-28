import { navList } from "../constant"

function Navbar() {
  return (
    <nav id="navbar">
        <div className="nav-content">
            <div className="nav-logo">
                <svg width={18} height={18} fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path> </g></svg>
            </div>
            <div className="nav-list">
                <ul>
                    {
                        navList.map((navlist, index) => (
                            <li key={index}>
                                <a href={navlist.href}>{navlist.description}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="nav-icons">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <svg width={17} height={17} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M27 4.96h-5.975v-1.918c0-1.655-1.346-3-3-3h-3.989c-1.655 0-3 1.345-3 3v1.918h-6.037c-1.104 0-2 0.896-2 2v22.999c0 1.105 0.896 2 2 2h22c1.105 0 2-0.895 2-2v-22.999c0-1.104-0.895-2-2-2h0zM13.037 3.042c0-0.552 0.448-1 1-1h3.989c0.552 0 1 0.448 1 1v1.918h-5.989v-1.918zM27 29.959h-22v-22.999h6.037v2.058s-0.027 0.999 0.994 0.999c1.125 0 1.006-0.999 1.006-0.999v-2.058h5.989v2.058s-0.067 1.004 0.996 1.004c1 0 1.004-1.004 1.004-1.004v-2.058h5.974v22.999z"></path> </g></svg>
            </div>
        </div>
    </nav>
  )
}

export default Navbar