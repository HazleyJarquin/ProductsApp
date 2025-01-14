import { getInitialsByName } from "@/utils/getInitialsByName";
import {
  AvatarFallback,
  Avatar as ShadcnAvatar,
  AvatarImage,
} from "../ui/avatar";

interface Props {
  name: string;
  src?: string;
}

export const Avatar = ({ name, src }: Props) => {
  return (
    <ShadcnAvatar>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="bg-gray-400 text-white">
        {getInitialsByName(name)}
      </AvatarFallback>
    </ShadcnAvatar>
  );
};
