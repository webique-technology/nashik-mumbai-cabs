import Link from "next/link";
import "../../styles/main.scss";

export const LinkPillBtn = ({
  href,
  target,
  btnText,
  img,
  imgClass = "btn-icon-image",
  icon,
  rightIcon,
  varaint = "primary",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`pill-btn d-flex align-items-center justify-content-center gap-2 ${varaint}`}
    >
      {(img && icon) && (
  <div>
    <img src={img} className={imgClass} alt={img || "image"} />
    {icon}
  </div>
)}
      {btnText}
      {rightIcon}
    </Link>
  );
};

export const secondaryBtn = ({
  type,
  varaint = "secondary",
  img,
  imgClass,
  icon,
  btnText,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`btn-square d-flex align-items-center gap-2 ${varaint}`}
      onClick={onClick}
    >
      <div>
        {img && (
          <img src={img} className={imgClass} alt={`${img}` || "image"} />
        )}
        {icon}
      </div>
      {btnText}
    </button>
  );
};
