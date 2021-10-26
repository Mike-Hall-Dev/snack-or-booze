import React from "react";
import NewItemForm from "./NewItemForm";


const AddItem = ({ createID, addItem }) => {

    // const createID = (itemObj) => {
    //     let itemName = itemObj.name.toLowerCase();
    //     let itemID = itemName.replace(/ /g, '-');
    //     return itemID;
    // }
    return (
        <>
            <NewItemForm createID={createID} addItem={addItem}></NewItemForm>
        </>
    )
}

export default AddItem;