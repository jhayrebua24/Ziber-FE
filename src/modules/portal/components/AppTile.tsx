import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  label: string;
  icon: IconType;
}

function AppTile({ path, label, icon: Icon }: Props) {
  return (
    <Link to={path}>
      <div className="flex flex-col items-center hover:bg-forest-100 py-2">
        <Icon size={25} className="text-forest-500" />
        <p className="text-sm text-gray-400 font-medium text-center">{label}</p>
      </div>
    </Link>
  );
}

export default AppTile;
