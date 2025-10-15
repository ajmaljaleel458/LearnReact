import { useState } from "react";
import "./SnackMenu.css";

type Item = {
  id: number;
  title: string;
};

const initialItems: Item[] = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export function SnackMenuBad() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  function handleItemChange(id: number, e: any) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="SnackMenu">
      Hello from SnackMenu!
      <div>
        <h2>What's your travel snack?</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={(e) => {
                  handleItemChange(item.id, e);
                }}
              />{" "}
              <button
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                Choose
              </button>
            </li>
          ))}
        </ul>
        <p>You picked {selectedItem.title}.</p>
      </div>
    </div>
  );
}

export default function SnackMenu() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedItemId, setSelectedItemId] = useState<number>(0);

  function handleItemChange(id: number, e: any) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="SnackMenu">
      Hello from SnackMenu!
      <div>
        <h2>What's your travel snack?</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={(e) => {
                  handleItemChange(item.id, e);
                }}
              />{" "}
              <button
                onClick={() => {
                  setSelectedItemId(item.id);
                }}
              >
                Choose
              </button>
            </li>
          ))}
        </ul>
        <p>You picked {items[selectedItemId].title}.</p>
      </div>
    </div>
  );
}
