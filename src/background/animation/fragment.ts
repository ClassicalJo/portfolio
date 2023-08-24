export const fragment = `
precision highp float;
uniform vec4 u_primary_color;
vec4 u_secondary_color = vec4(0, 0.1, 0.1, 1.0);
uniform vec2 u_translation;
uniform float u_time;
uniform vec2 u_resolution;
vec2 random(vec2 uv){
    uv = vec2( dot(uv, vec2(127.1,311.7) ),
               dot(uv, vec2(269.5,183.3) ) );
    return -1.0 + 2.0 * fract(sin(uv) * 43758.5453123);
}

float noise(vec2 uv, float seed_h, float seed_v) {
    uv.x = uv.x + seed_h;
    uv.y = uv.y + seed_v;
    
    vec2 uv_index = floor(uv);
    vec2 uv_fract = fract(uv);

    vec2 blur = smoothstep(0.0, 1.0, uv_fract);
    float alpha = .9;
    return mix( mix( dot( random(uv_index + vec2(0.0,0.0) ), uv_fract - vec2(0.0,0.0) ),
                     dot( random(uv_index + vec2(1.0,0.0) ), uv_fract - vec2(1.0,0.0) ), blur.x),
                mix( dot( random(uv_index + vec2(0.0,1.0) ), uv_fract - vec2(0.0,1.0) ),
                     dot( random(uv_index + vec2(1.0,1.0) ), uv_fract - vec2(1.0,1.0) ), blur.x), blur.y) + alpha;
}

vec4 adjustColor(vec4 col, vec4 colorA, vec4 colorB) {
    float darkness = (col.r + col.g + col.b) / 3.0;  
    if (darkness < 0.85) {
      return col * colorA;
    } else {
      return col * colorB * colorA; 
    }
  }

void main()
{  
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / u_resolution.x;
    
    // animation parameters 
    float horizontal_speed = 0.0;
    float vertical_speed = 0.0;
    float horizontal_oscillation_factor = -3.0;
    float vertical_oscillation_factor = 1.0;
    float horizontal_oscillation_speed = 1.0;
    float vertical_oscillation_speed = 5.0;
    float horizontal_oscillation_frequency = -4.0;
    float vertical_oscillation_frequency = 1.0;
    float chaos_factor = 2.0;
    float time = u_time * .0005;

    // noise
    uv = chaos_factor * uv;
    uv.x = uv.x - time * horizontal_speed;
    uv.y = uv.y + time * vertical_speed;
 
    float horizontal_seed = horizontal_oscillation_frequency * noise(uv, horizontal_oscillation_speed * time * horizontal_oscillation_factor, 0.0);
    float vertical_seed = vertical_oscillation_frequency * noise(uv, 0.0, vertical_oscillation_speed * time * vertical_oscillation_factor);

    float noise = noise(uv, horizontal_seed, vertical_seed);
    vec3 col = vec3(noise, noise, noise);
    
    // Output to screen
    gl_FragColor = adjustColor(vec4(col,1.0), u_primary_color, u_secondary_color) ;
}
`
