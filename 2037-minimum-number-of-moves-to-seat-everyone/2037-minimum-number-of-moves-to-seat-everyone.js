/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
      let totalMoves = 0;
    let seatOrder = seats.sort((a,b)=> a-b);
    let student = students.sort((a,b)=> a-b);
    student.forEach((ele,i) => totalMoves += Math.abs(ele - seatOrder[i]));
    return totalMoves;
};