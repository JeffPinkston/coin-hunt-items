export const getImagePath = (name, folder, size) => {
    const imagePath = `/assets/images/${folder}/${size}/${name.toLowerCase().replaceAll(' ', '_')}.png`;
    console.log(imagePath)
    return imagePath;
}