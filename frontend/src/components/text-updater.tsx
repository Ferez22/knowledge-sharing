import { Handle, Position } from '@xyflow/react'
import { FC, useCallback } from 'react'

const handleStyle = { left: 10 }

interface TextUpdaterNodeProps {
  data: any
  isConnectable: any
}

const TextUpdaterNode: FC<TextUpdaterNodeProps> = ({ data, isConnectable }) => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className="text-updater-node border p-3">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag ml-1 border p-1"
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  )
}

export default TextUpdaterNode
