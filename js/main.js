var country_canvas = window.document.getElementById('countries');
var stage = country_canvas.getContext('2d');



// Italy
stage.fillStyle = 'green'; // position-x - position-y - width - height
stage.strokeRect(320, 100, 500, 300);
stage.fillRect(320, 100, 166, 300);
stage.fillStyle = 'red';
stage.fillRect(655, 100, 166, 300);

// Germany
stage.fillStyle = 'black'; // position-x - position-y - width - height
stage.strokeRect(320, 430, 500, 300);
stage.fillRect(320, 430, 500, 100);
stage.fillStyle = 'red';
stage.fillRect(320, 530, 500, 100);
stage.fillStyle = 'yellow';
stage.fillRect(320, 630, 500, 100);

// France
stage.fillStyle = 'blue'; // position-x - position-y - width - height
stage.strokeRect(320, 760, 500, 300);
stage.fillRect(320, 760, 166, 300);
stage.fillStyle = 'red';
stage.fillRect(655, 760, 166, 300);

// Germany
stage.fillStyle = 'red'; // position-x - position-y - width - height
stage.strokeRect(320, 1090, 500, 300);
stage.fillRect(320, 1090, 500, 100);
stage.fillStyle = 'dodgerblue';
stage.fillRect(320, 1290, 500, 100);







