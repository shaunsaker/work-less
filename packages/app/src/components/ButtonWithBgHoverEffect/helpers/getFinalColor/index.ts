import Color from 'color';

const getFinalColor = (color: string, amount: number) => {
  const colorObject = Color(color);
  const isLight = colorObject.isLight();
  let finalColorObject;

  if (isLight) {
    finalColorObject = colorObject.darken(amount);
  } else {
    finalColorObject = colorObject.lighten(amount);
  }

  const finalColor = finalColorObject.rgb().string();

  return finalColor;
};

export default getFinalColor;
