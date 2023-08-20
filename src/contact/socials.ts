import icons from '../assets/icons'
type SocialLinks = {
  src: string
  href: string
  alt: string
}
const socials: SocialLinks[] = [
  {
    src: icons.mail,
    href: 'mailto:jb.barrientos@yahoo.com',
    alt: 'My e-mail address'
  },
  {
    src: icons.linkedin,
    href: 'https://www.linkedin.com/in/classicaljo/',
    alt: 'Linkedin Profile'
  },
  { src: icons.github, href: 'https://github.com/classicaljo', alt: 'Github Profile' }
]

export default socials
