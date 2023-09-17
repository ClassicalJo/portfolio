import images from '../assets/images'
let uid = 0
export type Item = {
  tags: string[]
  id: number
  title: string
  description: string
  src: string
  deploy: string
  github: string
  alt: string
}
export const items: Item[] = [
  {
    tags: ['styled-components', 'react', 'next', 'redux', 'jest'],
    id: uid++,
    alt: 'Rendered picture of a man using virtual reality equipment, exploring different possibilities.',
    title: 'Aerolab Frontend Challenge',
    description:
      'A fullstack challenge designed by Aerolab. The objective was to build a pixel perfect point redeeming website using NextJS and Styled Components using a Figma design.',
    src: images.aerolab,
    deploy: 'https://cj-aerolab.vercel.app/',
    github: 'https://github.com/ClassicalJo/frontend-developer-coding-challenge'
  },
  {
    tags: ['algorithms', 'javascript'],
    id: uid++,
    alt: 'A simple green and black maze, with a starting point and a goal.',
    title: 'Pathfinder',
    description:
      'An implementation of the A* pathfinding algorithm in vanilla javascript. One of my first projects.',
    src: images.pathfinder,
    deploy: 'https://classicaljo.github.io/pathfinder/',
    github: 'https://github.com/ClassicalJo/pathfinder'
  },
  {
    tags: ['javascript', 'webgl'],
    id: uid++,
    alt: 'An animated canvas, displaying stylized sun, clouds and sea, the water displaying a waving effect and reflecting the sky in real time.',
    title: 'Reflections',
    description:
      'Unable to find a performant water reflecting animation I decided to make my own. My first webgl project.',
    src: images.reflections,
    deploy: 'https://classicaljo.github.io/reflections/',
    github: 'https://github.com/ClassicalJo/reflections'
  },
  {
    tags: ['javascript', 'game'],
    id: uid++,
    alt: 'Stylized spaceships fighting with lightsabers against shapeless enemies',
    title: 'Blinker',
    description:
      'Entry for js13k 2021 game jam, in which i participated. Its a cool little game about fighting space aliens with spaceships equipped with lightsabers',
    src: images.blinker,
    deploy: 'https://js13kgames.com/games/blinker/index.html',
    github: 'https://github.com/ClassicalJo/blinker13'
  }
]
