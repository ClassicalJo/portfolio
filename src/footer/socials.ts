import icons from '../assets/icons'
type SocialLinks = {
  name: string
  src: string
  href: string
  alt: string
}
const socials: SocialLinks[] = [
  {
    name: 'Mail address',
    src: icons.mail,
    href: 'mailto:jb.barrientos@yahoo.com',
    alt: 'My e-mail address'
  },
  {
    name: 'Linkedin',
    src: icons.linkedin,
    href: 'https://www.linkedin.com/in/classicaljo/',
    alt: 'Linkedin Profile'
  },
  {
    name: 'Github',
    src: icons.github,
    href: 'https://github.com/classicaljo',
    alt: 'Github Profile'
  }
]

export default socials
