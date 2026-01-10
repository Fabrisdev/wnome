import { useColors } from "../hooks/useColors";

export function Divider() {
  const colors = useColors();
  return <hr style={{ borderColor: colors.sidebar.divider }} />;
}
