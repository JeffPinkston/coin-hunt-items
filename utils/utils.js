export const cubieLoader = ({src}) => {
    return `/assets/images/cubies/60px/${String(src).toLowerCase().replaceAll(' ', '_')}.png`;
}