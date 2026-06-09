import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
return (
<div>
{/*Portfolio Heading: */}
<h1>My Portfolio</h1>
{/*Logo: */}
<img src='AJTD Logo.png' alt='My logo' width={100} height={100} style={{ float: 'left', marginRight: '20px' }}></img>
<br /><br /><br />
{/*Navigation: */}
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link> |
<Link to="/education">Education</Link>| <Link
to="/project">Project</Link>| <Link to="/contact">Contact</Link> | <Link to="/services">Services</Link>
</nav>
<hr />
</div>
);
}