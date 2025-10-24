<script>
    import { WebGlShader } from "svader";

    const shaderCode = `#version 300 es

        precision highp float;

        out vec4 fragColor;

        uniform vec2 u_resolution;
        uniform vec2 u_offset;

        void main() {
            vec2 pos = gl_FragCoord.xy + u_offset;
            vec2 st = pos / u_resolution;
            fragColor = vec4(st, 0.0, 1.0);
        }
    `;
</script>

<WebGlShader
    width="100%"
    height="300pxww"
    code={shaderCode}
    parameters={[
        { name: "u_resolution", value: "resolution" },
        { name: "u_offset", value: "offset" },
    ]}
>
    <div class="fallback">WebGL not supported in this environment.</div>
</WebGlShader>