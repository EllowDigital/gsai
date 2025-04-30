declare module "three" {
  export class Scene extends Object3D {
    background: Color | Texture | null;
    override add(...object: Object3D[]): this;
  }

  export class Object3D {
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    children: Object3D[];
    parent: Object3D | null;
    name: string;

    add(...object: Object3D[]): this;
    remove(...object: Object3D[]): this;
    traverse(callback: (object: Object3D) => void): void;
    lookAt(x: number | Vector3, y?: number, z?: number): void;
  }

  export class Euler {
    x: number;
    y: number;
    z: number;
    order: string;

    set(x: number, y: number, z: number, order?: string): this;
  }

  export class Vector3 {
    x: number;
    y: number;
    z: number;

    set(x: number, y: number, z: number): Vector3;
    length(): number;
    normalize(): Vector3;
    clone(): Vector3;
    add(v: Vector3): Vector3;
    sub(v: Vector3): Vector3;
    multiplyScalar(scalar: number): Vector3;
  }

  export class Color {
    r: number;
    g: number;
    b: number;

    constructor(r?: number | string, g?: number, b?: number);
    set(color: string | number): Color;
    setRGB(r: number, g: number, b: number): Color;
    clone(): Color;
  }

  export class PerspectiveCamera extends Object3D {
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    fov: number;
    aspect: number;
    near: number;
    far: number;
    updateProjectionMatrix(): void;
  }

  export class WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    domElement: HTMLCanvasElement;

    render(scene: Scene, camera: PerspectiveCamera): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
    setPixelRatio(value: number): void;
    dispose(): void;
    clear(): void;
  }

  export interface WebGLRendererParameters {
    canvas?: HTMLCanvasElement;
    context?: WebGLRenderingContext;
    alpha?: boolean;
    antialias?: boolean;
    depth?: boolean;
    stencil?: boolean;
    preserveDrawingBuffer?: boolean;
    powerPreference?: "default" | "high-performance" | "low-power";
    precision?: "highp" | "mediump" | "lowp";
  }

  export class BufferGeometry {
    attributes: { [name: string]: BufferAttribute };
    index: BufferAttribute | null;

    setAttribute(name: string, attribute: BufferAttribute): BufferGeometry;
    setIndex(index: BufferAttribute | number[] | null): void;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
  }

  export class BufferAttribute {
    array: ArrayLike<number>;
    itemSize: number;
    count: number;
    normalized: boolean;
    needsUpdate: boolean;

    constructor(
      array: ArrayLike<number>,
      itemSize: number,
      normalized?: boolean
    );
    setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;
    copyArray(array: ArrayLike<number>): void;
  }

  export class PointsMaterial {
    size: number;
    color: Color;
    vertexColors: boolean;
    transparent: boolean;
    opacity: number;
    blending: number;

    constructor(parameters?: PointsMaterialParameters);
  }

  export interface PointsMaterialParameters {
    size?: number;
    color?: Color | string | number;
    vertexColors?: boolean;
    transparent?: boolean;
    opacity?: number;
    blending?: number;
  }

  export class Points<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends PointsMaterial = PointsMaterial
  > extends Object3D {
    geometry: TGeometry;
    material: TMaterial;

    constructor(geometry: TGeometry, material: TMaterial);
  }

  export class Texture {
    image: TexImageSource;
    needsUpdate: boolean;

    constructor(image?: TexImageSource);
  }

  export class Clock {
    constructor(autoStart?: boolean);
    getElapsedTime(): number;
    getDelta(): number;
    start(): void;
    stop(): void;
    running: boolean;
  }

  export const AdditiveBlending: number;
  export const NormalBlending: number;
  export const NoBlending: number;
}
