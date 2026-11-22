import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // نشيك إذا المستخدم اختار ثيم قبل كذا، وإلا نخليه dark كافتراضي (تقدر تغيره لـ light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    // نطبق السمة على عنصر html الرئيسي ونحفظها
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook مخصص يسهل علينا استدعاء الثيم في أي كومبوننت بسطر واحد
export const useTheme = () => useContext(ThemeContext);