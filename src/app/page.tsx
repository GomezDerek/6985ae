// TODO: put ReactFlow in a separate component/file (components/features/ReactFlow.tsx)
// TODO: put this app into light mode lol
'use client';

import React, { useState, useCallback } from "react";
import { 
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  Controls,
  Background, 
  // useNodesState, 
  // useEdgesState, 
  // addEdge,
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';
import styles from "./page.module.css";

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'step edge', type: 'step' }];

export default function Home() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  // const onConnect = useCallback(
  //   (params: any) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges],
  // );

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
            nodes={nodes} 
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            // onConnect={onConnect} 
            fitView
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
