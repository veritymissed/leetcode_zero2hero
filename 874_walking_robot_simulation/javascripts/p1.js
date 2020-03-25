/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
class Position {
  constructor (xPos, yPos) {
    this.x = xPos
    this.y = yPos
    this.dirs = [{
      x: 0,
      y: 1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: -1
    }, {
      x: 1,
      y: 0
    }]
    this.dirIndex = 0
  }

  getPosition () {
    return {
      x: this.x,
      y: this.y
    }
  }

  nextStep () {
    this.x += this.dirVector().x
    this.y += this.dirVector().y
    var nextPoint = {
      x: this.x + this.dirVector().x,
      y: this.y + this.dirVector().y
    }
    return nextPoint
  }

  turn (command) {
    if (command === -2) {
      this.dirIndex = (this.dirIndex + 1) % 4
    }
    if (command === -1) {
      this.dirIndex = (this.dirIndex + 3) % 4
    }
  }

  dirVector () {
    return this.dirs[this.dirIndex]
  }

  moveUnit (unit) {
    console.log('unit', unit)
    for (var i = 0; i < unit; i++) {
      var nextPoint = this.nextStep()
      console.log('nextPoint', nextPoint)
    }
    // console.log("dir", this.dirVector());
    this.x = this.x + unit * this.dirVector().x
    this.y = this.y + unit * this.dirVector().y
    // console.log("move to", this.getPosition());
  }

  calDistance () {
    return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2), 0.5)
  }
}

var robotSim = function (commands, obstacles) {
  var initPos = new Position(0, 0)
  console.log('commands', commands)

  for (var i = 0; i < commands.length; i++) {
    if (commands[i] >= 0) {
      initPos.moveUnit(commands[i])
    } else {
      initPos.turn(commands[i])
    }
  }
  console.log('Final position: ', initPos.getPosition())
}

// robotSim([4,-1,3], [])
robotSim([4, -1, 4, -2, 4], [[2, 4]])

// var newPos = new Position(3,4)
// console.log(newPos.distance);
// console.log(newPos.dirVector);
// console.log(newPos.moveUnit(5));
// newPos.turn(-1)
// newPos.turn(-1)
// newPos.turn(-1)
//
// newPos.turn(-1)
// newPos.turn(-1)
// newPos.turn(-1)
