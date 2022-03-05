import Appfooter from "./AppFooter"
import AppHeader from "./AppHeader"
import ChosenPlaces from "./ChosenPlaces"

function MainContent(): JSX.Element{
    return (
        <main>
            <AppHeader />
            <ChosenPlaces />
            <Appfooter />
        </main>
    )
}

export default MainContent