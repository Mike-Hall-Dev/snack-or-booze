import React, { useState } from "react";
import NewItemForm from "./NewItemForm";
import Loading from "./Loading";



const AddItem = ({ createID, addItem }) => {
    return (
        <>
            <NewItemForm createID={createID} addItem={addItem} ></NewItemForm>
        </>
    )
}

export default AddItem;