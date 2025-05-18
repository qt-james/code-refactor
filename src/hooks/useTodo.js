import { useState } from "react";

export const useTodo = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleStartEdit = (index) => {
    setEditingIndex(index);
    setEditText(items[index]);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = editText;
      setItems(updatedItems);
      setEditingIndex(null);
      setEditText("");
    }
  };

  const handleNewItemChange = (value) => {
    setNewItem(value);
  };

  const handleEditTextChange = (value) => {
    setEditText(value);
  };

  return {
    items,
    newItem,
    editingIndex,
    editText,
    handleAddItem,
    handleDeleteItem,
    handleStartEdit,
    handleSaveEdit,
    handleNewItemChange,
    handleEditTextChange,
  };
};
