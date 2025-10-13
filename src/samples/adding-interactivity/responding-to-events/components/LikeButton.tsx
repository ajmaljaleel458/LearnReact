import { Button } from "@mui/material";

type Props = {
  name: string;
};

export default function LikeButton({ name }: Props) {
  const handleLikeClick = () => {
    alert(`Thank you ${name} for liking the content!`);
  };
  return (
    <Button onClick={handleLikeClick} variant="contained">
      Like
    </Button>
  );
}
