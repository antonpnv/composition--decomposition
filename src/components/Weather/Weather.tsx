/**
 * Компонент Weather: отвечает за информацию о погоде.
 */

export const Weather: React.FC = () => {
  return (
    <div className="weather">
      <div className="sun">☀️</div>
      <div className="temperature">+25°</div>
      <div className="forecast">Утром +20, днём +25</div>
    </div>
  );
};
