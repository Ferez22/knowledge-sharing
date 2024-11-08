import '@xyflow/react/dist/style.css'

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow
} from '@xyflow/react'
import { useCallback, useState } from 'react'

import TextUpdaterNode from './text-updater'

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input'
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 }
  },
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 }
  }
]

const initialEdges = [
  { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }
]

const App = () => {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  )

  const nodeTypes = { textUpdater: TextUpdaterNode }

  return (
    <div className="flex items-center justify-start gap-8 p-12">
      <div
        style={{
          height: '700px',
          width: '700px',
          border: '1px solid #000'
        }}
      >
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <div>hey</div>
    </div>
  )
}

export default App
