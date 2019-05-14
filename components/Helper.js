function isOutOfBounds(sprite) {
    return (sprite.x <= -100 || sprite.x >= 970 || sprite.y <= -100 || sprite.y >= 590);
}

function isOffScreen(sprite) {
    return (sprite.x <= -50 || sprite.x >= 900 || sprite.y <= -50 || sprite.y >= 500);
}