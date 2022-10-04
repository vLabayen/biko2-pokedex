import "./tag.css";

interface Props {
  type: string;
}

export const Tag = ({ type }: Props) => {
  const capitalizeType = type[0].toUpperCase() + type.substring(1);
  return (
    <span className={`font-bold-small tag__text color__type--${type}`}>
      {capitalizeType}
    </span>
  );
};
