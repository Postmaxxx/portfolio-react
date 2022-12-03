import React from "react";
import Preloader from "../../components/preloader/Preloader";

export const setImage = (id, images = [], callback) => {
    let _target = document.querySelector(id); //container for image
    let _image = document.createElement("img"); //create new <img>
    

    _image.onload = () => { //add only this image to container
        _target?.replaceChildren(_image);
        callback(_target?.querySelector('img')) //return <img> after completely loaded. For preloader
        return
    }
   
    _image.src = images.find((image) => {
        return image.width >= _target?.offsetWidth //find first image with 'width' more than 'container width'
    })?.image; //return this image as src for created <img>
}