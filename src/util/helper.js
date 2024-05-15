export function generateAvatarColor(letter) {
    // Generate hue value based on ASCII code of the letter
    let hue = letter.charCodeAt(0) * 7 % 360;
    // Set saturation and lightness values
    let saturation = 70;
    let lightness = 50;
    // Convert HSL values to CSS color format
    let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return color;
}