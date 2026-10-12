/// TODO: Default image when image not found or undefined
type Props = {
    image?: string,
}

/// TODO: Fix responsibilities
export default function Avatar({ image } : Props) {
    return (
        <div style={{
            height: "32px"
        }}>
            <span style={{
                height: "32px",
                width: "32px",
                display: "flex"
            }}>
                <img src={image} style={{
                    borderRadius: "50%",
                    // objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}/>
            </span>
        </div>
    )
} 