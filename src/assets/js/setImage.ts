import { ImageMe } from './../../models';
import preloader from '../../components/preloader/preloader_template'

export const setImage = (id: string, images: ImageMe[] = [], callback: (obj: HTMLElement) => any): void => {
    let _target: HTMLElement = document.querySelector(id); //container for image
    let _image: HTMLImageElement  = document.createElement("img"); //create new <img>
    _target.innerHTML = preloader();

    _image.onload = (): void => { //add only this image to container
        _target?.replaceChildren(_image);
        callback(_target?.querySelector('img')) //return <img> after completely loaded. For preloader
        return
    }
   
    _image.src = images.find((image: ImageMe) => {
        return image.width >= _target?.offsetWidth //find first image with 'width' more than 'container width'
    })?.image; //set this image as src for created <img>
}