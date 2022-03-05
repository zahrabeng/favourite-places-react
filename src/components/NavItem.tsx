interface NavItemProps{
    label:string;
}

function NavItem(props: NavItemProps): JSX.Element{
    return(
        <div>
            <a href="#">{props.label}</a>
            <span> | </span>
        </div>
    )
}
export default NavItem;