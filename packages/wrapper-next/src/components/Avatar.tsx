/// TODO: Default image when image not found or undefined
type Props = {
    image?: string,
}

/// Fills its parent; the parent decides the size and should be square.
export default function Avatar({ image } : Props) {
    return (
        <img src={image} alt="" style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
        }}/>
    )
}
