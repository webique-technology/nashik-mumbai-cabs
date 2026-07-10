import Link from "next/link"

export const LinkPillBtn = ({ href, btnText, varaint = "primary" }) => {
    return (
        <Link href={href} className={`pill-btn ${varaint}`}>
            {btnText}
        </Link>
    )
}