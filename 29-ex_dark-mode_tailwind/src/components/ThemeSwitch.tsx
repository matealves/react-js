import { useTheme } from "@/contexts/ThemeContext";

export const ThemeSwitch = () => {
  const themeCtx = useTheme();

  const handleThemeButton = () => {
    themeCtx?.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="fixed top-0 right-0 p-2 text-center cursor-pointer text-sm rounded-lg border border-opacity-25 border-gray-300"
      onClick={handleThemeButton}
    >
      {themeCtx?.theme === "dark" && "☀️ Light mode"}
      {themeCtx?.theme === "light" && "🌙 Dark mode"}
    </div>
  );
};
