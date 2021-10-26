import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const NewItemForm = ({ createID, addItem }) => {
    const INITIAL_STATE = {
        name: '',
        description: '',
        recipe: '',
        serve: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [type, setType] = useState("drink");
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (e.target.name === "type") setType(e.target.value);
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itemID = createID(formData);
        const newItem = { "id": itemID, ...formData };
        addItem(newItem, type);
        setFormData(INITIAL_STATE);
        history.push("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="type">Item type</label>
            <select value={type} onChange={handleChange} name="type">
                <option value="drink">Drink</option>
                <option value="snack">Snack</option>
            </select>
            <label htmlFor="name">Item Name</label>
            <input
                required
                id="name"
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input
                required
                id="description"
                type="text"
                name="description"
                placeholder="Item Description"
                value={formData.description}
                onChange={handleChange}
            />
            <label htmlFor="recipe">Recipe</label>
            <input
                required
                id="recipe"
                type="text"
                name="recipe"
                placeholder="Recipe"
                value={formData.recipe}
                onChange={handleChange}
            />
            <label htmlFor="serve">Serve</label>
            <textarea
                required
                id="serve"
                name="serve"
                placeholder="Serve"
                value={formData.serve}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    )

}

export default NewItemForm;


