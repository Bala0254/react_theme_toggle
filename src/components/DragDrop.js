import React, { useState } from 'react';

const initialItems = ['Item 1', 'Item 2', 'Item 3'];

const DragDrop = () => {
  const [items, setItems] = useState(initialItems);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('drag-item', index);
  };

  const onDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData('drag-item');
    const tempItems = [...items];
    const [draggedItem] = tempItems.splice(dragIndex, 1);
    tempItems.splice(dropIndex, 0, draggedItem);
    setItems(tempItems);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Drag and Drop Items</h3>
      {items.map((item, index) => (
        <div
          key={item}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDrop={(e) => onDrop(e, index)}
          onDragOver={onDragOver}
          className="drag-item"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragDrop;
