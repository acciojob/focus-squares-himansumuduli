//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            squares.forEach(otherSquare => {
                if (otherSquare !== square) {
                    otherSquare.style.backgroundColor = '#6F4E37'; // Coffee color
                }
            });
        });

        square.addEventListener('mouseout', () => {
            squares.forEach(otherSquare => {
                otherSquare.style.backgroundColor = '#E6E6FA'; // Lavender color
            });
        });
    });
});

