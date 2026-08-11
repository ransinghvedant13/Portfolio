import { useEffect, useRef } from "react";
import * as THREE from "three";

// A CS-department-flavored 3D background: a drifting network of connected
// nodes (like a graph/circuit diagram) plus a couple of slowly rotating
// wireframe polyhedra (representing abstract "data structures"). Rendered
// once as a fixed layer behind the whole page, not per-section, so it reads
// as a single persistent scene while scrolling.
export default function Scene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const BLUEPRINT = 0x1e5f8c;
    const BRASS = 0xc9a227;
    const LINE_COLOR = 0x1e5f8c;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // ---- Node network (graph / circuit look) ----
    const NODE_COUNT = 42;
    const spread = { x: 26, y: 16, z: 12 };
    const nodePositions = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * spread.x * 2,
          (Math.random() - 0.5) * spread.y * 2,
          (Math.random() - 0.5) * spread.z * 2
        )
      );
    }

    const nodeGeometry = new THREE.BufferGeometry().setFromPoints(nodePositions);
    const nodeMaterial = new THREE.PointsMaterial({
      color: BLUEPRINT,
      size: 0.12,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(nodeGeometry, nodeMaterial);

    // A handful of accent nodes in brass
    const accentIdx = new Set();
    while (accentIdx.size < 6) accentIdx.add(Math.floor(Math.random() * NODE_COUNT));
    const accentPositions = [...accentIdx].map((i) => nodePositions[i]);
    const accentGeometry = new THREE.BufferGeometry().setFromPoints(accentPositions);
    const accentMaterial = new THREE.PointsMaterial({
      color: BRASS,
      size: 0.18,
      transparent: true,
      opacity: 0.7,
    });
    const accentPoints = new THREE.Points(accentGeometry, accentMaterial);

    // Connect nearby nodes with thin lines - a circuit/graph feel
    const MAX_DIST = 8.5;
    const linePositions = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < MAX_DIST) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: LINE_COLOR,
      transparent: true,
      opacity: 0.09,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

    const networkGroup = new THREE.Group();
    networkGroup.add(points, accentPoints, lines);
    scene.add(networkGroup);

    // ---- Floating wireframe polyhedra (abstract "data structures") ----
    const shapesGroup = new THREE.Group();
    const shapeDefs = [
      { geo: new THREE.IcosahedronGeometry(3, 0), pos: [-14, 6, -6], color: BLUEPRINT },
      { geo: new THREE.OctahedronGeometry(2.2, 0), pos: [15, -5, -4], color: BRASS },
      { geo: new THREE.TetrahedronGeometry(2, 0), pos: [8, 8, -8], color: BLUEPRINT },
    ];
    const meshes = shapeDefs.map(({ geo, pos, color }) => {
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      shapesGroup.add(mesh);
      return mesh;
    });
    scene.add(shapesGroup);

    // ---- Mouse parallax (subtle) ----
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // ---- Resize handling ----
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ---- Animation loop ----
    let rafId;
    const clock = new THREE.Clock();

    const renderStatic = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      const t = clock.getElapsedTime();

      networkGroup.rotation.y = t * 0.03;
      networkGroup.rotation.x = Math.sin(t * 0.015) * 0.1;

      meshes.forEach((mesh, i) => {
        mesh.rotation.x = t * (0.05 + i * 0.01);
        mesh.rotation.y = t * (0.04 + i * 0.008);
      });

      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 1 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderStatic();
    } else {
      animate();
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mount.removeChild(renderer.domElement);
      nodeGeometry.dispose();
      accentGeometry.dispose();
      lineGeometry.dispose();
      nodeMaterial.dispose();
      accentMaterial.dispose();
      lineMaterial.dispose();
      shapeDefs.forEach((s) => s.geo.dispose());
      meshes.forEach((m) => m.material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-paper" aria-hidden="true">
      <div ref={mountRef} className="absolute inset-0" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, transparent 40%, rgba(245,246,248,0.6) 100%)",
        }}
      />
    </div>
  );
}
