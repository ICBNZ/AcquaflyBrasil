import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import Logo from './Logo';

const Navigation = () => {
  const sections = [
    {
      title: "about",
      url: "/about",
      id: 1,
    },
    {
      title: "contact",
      url: "/contact",
      id: 2,
    },
    {
      title: "services",
      url: "/services",
      id: 3,
    },

  ]
  return (
    <div className="navbar">
      <Logo image={logo}/>
    
      <ul className="nav">
        {sections.map(({ title, id, url }) => (
            <NavLink 
              to={url} 
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
             key={id}>
               <li>{title}</li>
             </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Navigation;
