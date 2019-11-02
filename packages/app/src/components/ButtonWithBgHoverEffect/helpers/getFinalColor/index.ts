import Color from 'color';

/*
 * Takes a color and lightens/darkens it by an amount
 * The amount is a fraction
 * It calculates whether it should lighten or darken
 * by checking if the color is already light or dark
 * E.g. if the color is light, darken it by X
 * E.g. if the color is dark, lighten it by X
 */
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
