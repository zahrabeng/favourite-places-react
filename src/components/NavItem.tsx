interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <a href="https://images.app.goo.gl/AKTj1pU2ebe3zcBx6">{props.label}</a>
      <span> | </span>
    </>
  );
}
export default NavItem;
