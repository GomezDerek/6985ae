'use client';

import React, { useState, useCallback } from "react";
import { 
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';

// Node type alias
type Node = {
    id: string;
    position: { x: number; y: number };
    data: { label: string };
};

// Type alias for Edge objects
type Edge = {
  id: string;
  source: string;
  target: string;
  label?: string;
  type?: string;
};

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: '2' } },
];

// const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'step edge', type: 'step' }];
const initialEdges: Edge[] = [];

export default function MainFlow() {
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

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div id="flow-container">
      <ReactFlow
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1}/>
      </ReactFlow>
    </div>
  );
}