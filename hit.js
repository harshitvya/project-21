function Hit(bullet, wall) {
    if (wall.x - bullet.x < (bullet.width / 2 + wall.width / 2)) {
        bullet.velocityX = 0;
        damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
        if (damage > 1) {
            wall.shapeColor = rgb(255, 0, 0);
        }
        if (damage < 10) {
            wall.shapeColor = rgb(0, 255, 0);
        }
    }
}