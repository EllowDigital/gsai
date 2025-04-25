
declare module 'three' {
  export class Scene {
    add(object: Object3D): this;
    children: Object3D[];
    background: Color | null;
  }
  
  export class Object3D {
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    add(object: Object3D): this;
    remove(object: Object3D): this;
  }
  
  export class Euler {
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): this;
  }
  
  export class PerspectiveCamera extends Object3D {
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
    setPixelRatio(value: number): void;
  }
  
  export class BufferGeometry {
    setAttribute(name: string, attribute: BufferAttribute): BufferGeometry;
    attributes: {
      [name: string]: BufferAttribute;
    };
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
    constructor(r: number | string, g?: number, b?: number);
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
  
  export class Points extends Object3D {
    constructor(geometry: BufferGeometry, material: PointsMaterial);
    geometry: BufferGeometry;
    material: PointsMaterial;
  }
  
  export class Clock {
    constructor();
    getElapsedTime(): number;
    getDelta(): number;
  }
  
  export const AdditiveBlending: number;
}
