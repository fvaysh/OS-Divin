<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Office App</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <div id="navbar">
        <input type="text" placeholder="Search for issues">
    </div>
    <div id="sidebar">
        <h2>Menu</h2>
        <ul>
            <li><a href="#" onclick="signIn()">Sign In</a></li>
            <li><a href="#" onclick="logIn()">Log In</a></li>
            <li><a href="#" onclick="viewHoursWorked()">Hours Worked</a></li>
            <li><a href="#" onclick="viewTotalLeaves()">Total Leaves</a></li>
        </ul>
    </div>
    <div id="content">
        <h1>Welcome to the Office App</h1>
        <p id="department">Your department: [Department Name]</p>
        <p id="leaves">Remaining leaves: [45]</p>
        <button onclick="startWork()">Start Work</button>
        <p id="timer">0 hours worked today</p>
    </div>
    <script>
        let user = null;
        let hoursWorkedToday = 0;
        let leavesRemaining = 45;

        function signIn() {
            // Implement user authentication logic here
            user = { department: 'HR' }; // Placeholder user data
            document.getElementById('department').textContent = `Your department: ${user.department}`;
        }

        function logIn() {
            // Implement user login logic here
        }

        function startWork() {
            const timerElement = document.getElementById('timer');
            const startTimestamp = Date.now();

            const timerInterval = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = (currentTime - startTimestamp) / 1000 / 60 / 60; // Hours
                hoursWorkedToday = Math.min(6, elapsedTime); // Max 6 hours
                timerElement.textContent = `${hoursWorkedToday.toFixed(2)} hours worked today`;

                if (hoursWorkedToday >= 6) {
                    clearInterval(timerInterval);
                    alert('TIME DONE - You earned a badge!');
                }
            }, 1000); // Update every second
        }

        function viewHoursWorked() {
            // Implement viewing hours worked logic here
        }

        function viewTotalLeaves() {
            // Implement viewing total leaves logic here
        }
    </script>
</body>
</html>
