import React from 'react'
let Bishop = props => <path d={`

M 
${props.x + 150*props.ratio} ${props.y + 250 *props.ratio}
H 
${props.x + -150 *props.ratio}
Q 
${props.x + -150*props.ratio} ${props.y + 205 *props.ratio}
${props.x + -110*props.ratio} ${props.y + 180*props.ratio} 
Q 
${props.x + 0*props.ratio} ${props.y + 50 *props.ratio}
${props.x + -50*props.ratio} ${props.y + -50 *props.ratio}
C 
${props.x + -100*props.ratio} ${props.y + -0 *props.ratio}
${props.x + -100*props.ratio} ${props.y + -75 *props.ratio}
${props.x + -20*props.ratio} ${props.y + -50 *props.ratio}
A 
${30*props.ratio} ${50 *props.ratio}
0 0 1 
${props.x + 0*props.ratio} ${props.y + -200 *props.ratio}
C 
${props.x + -50*props.ratio} ${props.y + -250 *props.ratio}
${props.x + 50*props.ratio} ${props.y + -250 *props.ratio}
${props.x + 0*props.ratio} ${props.y + -200 *props.ratio}
A 
${30*props.ratio} ${50 *props.ratio}
0 0 1 
${props.x + 35*props.ratio} ${props.y + -155 *props.ratio}
L 
${props.x + 0*props.ratio} ${props.y + -125 *props.ratio}
L 
${props.x + 0*props.ratio} ${props.y + -100 *props.ratio}
L 
${props.x + 40*props.ratio} ${props.y + -135 *props.ratio}
A 
${30*props.ratio} ${50 *props.ratio}
0 0 1 
${props.x + 20*props.ratio} ${props.y + -50 *props.ratio}
C 
${props.x + 100*props.ratio} ${props.y + -75 *props.ratio}
${props.x + 100*props.ratio} ${props.y + 0 *props.ratio}
${props.x + 50*props.ratio} ${props.y + -50 *props.ratio}
Q 
${props.x + 0*props.ratio} ${props.y + 0 *props.ratio}
${props.x + 110*props.ratio} ${props.y + 180 *props.ratio}
Q 
${props.x + 150*props.ratio} ${props.y + 205 *props.ratio}
${props.x + 150*props.ratio} ${props.y + 250 *props.ratio}
H 
${props.x + 180*props.ratio} 
Z`} 
transform={`rotate(${props.rotation} 0 0)`}
fill="url(#chess)" />
export default Bishop
