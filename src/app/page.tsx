// TODO: debug the nodes so that they are draggable 😭
// TODO: put ReactFlow in a separate component/file (components/features/ReactFlow.tsx)
// TODO: put this app into light mode lol
'use client';

import React, { useState, useCallback } from "react";
import { 
  ReactFlow,
  MiniMap,
  Controls,
  Background, 
  // useNodesState, 
  applyNodeChanges,
  // useEdgesState, 
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';
import styles from "./page.module.css";

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Home() {
  // eslint-disable-next-line 
  const [nodes, setNodes] = useState(initialNodes);
  // eslint-disable-next-line 
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className={styles.page}>
      <header>
        <p id="header-logo">Avantos</p>
      </header>
      <main>
        <p>AI that empowers your team to deliver services that boost loyalty and revenue</p>
        
        {/* this is where the magic happens */}
        <div id="flow-container">
          <ReactFlow
            nodes={initialNodes} 
            edges={initialEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect} 
          >
            <Controls />
            <MiniMap />
            <Background gap={12} size={1}/>
          </ReactFlow>
        </div>

      </main>
      <footer>
      </footer>
    </div>
  );
}
