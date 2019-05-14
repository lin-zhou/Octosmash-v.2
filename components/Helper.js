function isOutOfBounds(sprite) {
    return (sprite.x <= -100 || sprite.x >= 970 || sprite.y <= -100 || sprite.y >= 590);
}

function isOffScreen(sprite) {
    return (sprite.x <= -50 || sprite.x >= 900 || sprite.y <= -50 || sprite.y >= 500);
}

function isColliding(a, b) {
    var ab = a.getBounds();
    var bb = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}