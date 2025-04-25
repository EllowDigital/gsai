
declare module 'three' {
  export class Scene {}
  export class PerspectiveCamera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    position: Vector3;
    aspect: number;
    updateProjectionMatrix(): void;
  }
  export class WebGLRenderer {
    constructor(parameters?: any);
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
    domElement: HTMLCanvasElement;
  }
  export class BufferGeometry {
    setAttribute(name: string, attribute: BufferAttribute): BufferGeometry;
  }
  export class BufferAttribute {
    constructor(array: ArrayLike<number>, itemSize: number);
    array: ArrayLike<number>;
    needsUpdate: boolean;
  }
  export class Vector3 {
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): Vector3;
  }
  export class Color {
    constructor(r: number, g: number, b: number);
    r: number;
    g: number;
    b: number;
  }
  export class PointsMaterial {
    constructor(parameters?: any);
    size: number;
    color: Color;
    vertexColors: boolean;
    transparent: boolean;
    opacity: number;
    blending: number;
  }
  export class Points {
    constructor(geometry: BufferGeometry, material: PointsMaterial);
    position: Vector3;
    geometry: BufferGeometry;
  }
  export class Clock {
    constructor();
    getElapsedTime(): number;
    getDelta(): number;
  }
  export const AdditiveBlending: number;
}
