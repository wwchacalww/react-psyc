import { IconBaseProps } from "react-icons";
import { NavLinkProps, NavLink as RouterLink } from "react-router-dom";
import { Container } from "./styles";

interface Props extends NavLinkProps {
  children: string;
  icon: React.ComponentType<IconBaseProps>;
  href: string;
}

export function NavLink({ children, icon: Icon, href, ...rest }: Props) {
  return (
    <Container>
      <Icon size={30} />
      <RouterLink {...rest}>
        <p>{children}</p>
      </RouterLink>
    </Container>
  );
}
