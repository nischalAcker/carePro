
import { Heading } from '../../components/Heading';
import ackoLogo from '../../assets/logo.svg'
import '../../App.css'

const About = () => {
  return (
    <div style={{ padding: '16px' }}>
      <a href="https://acko.com" target="_blank">
        <img src={ackoLogo} className="logo_acko" alt="Logo" />
      </a>
      <Heading>Learn more about us</Heading>
    </div>
  )
}

export default About;
