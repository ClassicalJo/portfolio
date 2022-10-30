export const fragment = `
// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default. It means "medium precision"
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform float u_time;

#define pi 3.14159265359

mat4 rotationMatrix(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;
  
  return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
              oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
              oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
              0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
mat4 m = rotationMatrix(axis, angle);
return (m * vec4(v, 1.0)).xyz;
}


void main() {
  // variables
  vec2 uv = gl_FragCoord.xy / u_resolution;    
  vec2 p = vec2(0.5) - uv;
  
  float mod_y = mod(uv.y, 15.);
  float mod_x = mod(u_translation.x, 15.);

  float rotation =  u_time;
  vec3 colors = vec3(1.) * vec3(mod_x, mod_y, 1) * 0.1;
  vec3 rotated = rotate(colors, vec3(1.), rotation);

  //Set fragment color
  gl_FragColor = vec4(rotated.xyz * (uv.y*2.-5.) , 1.);
}
`
