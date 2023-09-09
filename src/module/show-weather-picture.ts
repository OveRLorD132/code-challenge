export default function(code : Number) : String {
  let mainDir = `assets/weather-images/`;
  switch(code) {
    case 0:
      return mainDir + `clear.png`;
    case 1:
      return mainDir + `clear.png`;
    case 2:
      return mainDir + `partly-cloudly.png`;
    case 3:
      return mainDir + `overcast.png`;
    case 45:
      return mainDir + `fog.png`;
    case 48:
      return mainDir + `fog.png`;
    case 51:
      return mainDir + `drizzle-light.png`;
    case 53:
      return mainDir + `drizzle-moderate.png`;
    case 55:
      return mainDir + `drizzle-intensive.png`;
    case 56:
      return mainDir + `freezing-drizzle.png`;
    case 57: 
      return mainDir + `freezing-drizzle.png`;
    case 61:
      return mainDir + `rain-light.png`;
    case 63:
      return mainDir + `rain-moderate.png`;
    case 65:
      return mainDir + `rain-heavy.png`;
    case 66:
      return mainDir + `freezing-rain.png`;
    case 67:
      return mainDir + `freezing-rain.png`;
    case 71:
      return mainDir + `snow-light.png`;
    case 73:
      return mainDir + `snow-light.png`;
    case 75:
      return mainDir + `snow-heavy.png`;
    case 77:
      return mainDir + `snow-grains.png`;
    case 80:
      return mainDir + `rain-light.png`;
    case 81:
      return mainDir + `rain-moderate.png`;
    case 82:
      return mainDir + `rain-heavy.png`;
    case 85:
      return mainDir + `snow-light.png`;
    case 86:
      return mainDir + `snow-heavy.png`;
    case 95:
      return mainDir + `thunder.png`;
    case 96:
      return mainDir + `thunder.png`;
    case 99:
      return mainDir + `thunder.png`;
    default:
      return mainDir + `clear.png`;
  }
}