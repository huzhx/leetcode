/**
 * 
 * @param {string} instructions
 * @return {boolean}
 * 
 * First, we declare a variable to hold the current direction, and an array to keep track of the directional moves. Then, iterate through the commands, and if it's a forward move, increment the appropriate move value. If the command is a turn, update the direction variable, using a +1 for one direction and +3 for the other to keep the mod 4 value positive.

The important thing is to recognize that a set of commands that ends up with the robot facing a side results in a circular route leading back to the origin after 4 moves. A set of commands that ends up with the robot facing backwards will result in immediately reversing the action and will return to the origin after 2 moves. And a set of commands that ends up with the robot facing forwards will result in a false unless the robot ends the turn exactly at the origin.

So if the direction at the end is anything othe than the starting value, 0, or if the robot is still at the origin (if all forward and backward moves cancel out and all left and right moves cancel out), the return true, otherwise false.
 * 
 */

var isRobotBounded = function (instructions) {
  let dir = 0;
  let mov = [0, 0, 0, 0];

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === 'G') {
      mov[dir]++;
    } else {
      dir = (dir + (instructions[i] === 'L' ? 1 : 3)) % 4;
    }
  }

  return dir || (!(mov[0] - mov[2]) && !(mov[1] - mov[3])) ? true : false;
};
