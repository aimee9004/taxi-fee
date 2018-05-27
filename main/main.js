module.exports = function main(distance, holdTime) {
    if(distance <= 2) {
        return getRound(6 + getHoldTimePrice(holdTime))
    }else if(distance > 2 && distance <= 8) {
        return getRound(6 + (distance - 2) * 0.8 + getHoldTimePrice(holdTime))
    }else if(distance > 8) {
        return getRound(6 + 4.8 + (distance - 8) * 1.2 + getHoldTimePrice(holdTime))
    }
};
function getRound(num) {
    return Math.round(num)
}
function getHoldTimePrice(holdTime) {
    if(holdTime > 0) {
        return holdTime * 0.25
    }else {
        return 0
    }
}