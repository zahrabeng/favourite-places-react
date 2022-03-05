import NavItem from "./NavItem";

function AppHeader(): JSX.Element{
    return(
        <header>
            <nav>
            <NavItem label = {'Home Page'}/>
            <NavItem label = {'About Me'}/>
            <NavItem label = {'Preferences'}/>
            <NavItem label = {'Help'}/>
            </nav>
            <h1>My Favourite Places</h1>
        </header>
    );
}

export default AppHeader