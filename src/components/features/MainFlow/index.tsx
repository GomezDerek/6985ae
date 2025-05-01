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
  BackgroundVariant,
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';

import TextUpdaterNode from "@/components/ui/TextUpdaterNode";

// Type alias for Node objects
type Node = {
    id: string;
    position: { x: number; y: number };
    data: { label: string };
    type?: string; // Optional type property for custom node types
};

// Type alias for Edge objects
type Edge = {
  id: string;
  source: string;
  target: string;
  label?: string;
  type?: string;
};

// custom nodes to be used in the flow
const nodeTypes = {
  textUpdater: TextUpdaterNode
};


const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type: 'textUpdater' },
  { id: '2', position: { x: 100, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
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
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={6} variant={BackgroundVariant.Cross}/>
      </ReactFlow>
    </div>
  );
}