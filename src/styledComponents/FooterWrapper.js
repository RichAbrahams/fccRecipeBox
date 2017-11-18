import styled from 'styled-components';

const Footer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: #558B2F;
color: white;
padding: 1em;
height: 3em;
& :first-child {
  margin-right: 1em;
}
& a {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

& a:link {
  text-decoration: none;
}

& a:visited {
    text-decoration: none;
}

& a:hover {
    text-decoration: noe;
}

& a:active {
    text-decoration: none;
}
`;

export default Footer;
