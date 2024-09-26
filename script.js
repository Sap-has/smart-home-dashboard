// Sample JavaScript to control light and thermostat status

document.getElementById('light-toggle').addEventListener('click', function() {
    const lightStatus = document.getElementById('light-status');
    if (lightStatus.textContent === 'Off') {
        // what will be the light status now?
    } else {
        // what will be the light status now?
    }
});

document.getElementById('temp-control').addEventListener('input', function() {
    const temp = document.getElementById('temp-control').value;
    document.getElementById('temp-status').textContent = temp;
});

// add more for last 2 devices
// add more devices and implement them correctly, comments in JSON are not allowed