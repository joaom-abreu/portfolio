import Button from "@/shared/ui/Button/Button.jsx";

function IconButton({ icon, label, ...props }) {
  return (
    <Button variant="icon" iconLeft={icon} aria-label={label} {...props} />
  );
}

export default IconButton;
