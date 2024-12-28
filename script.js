// Example: Add a new follower alert
const alertBox = document.querySelector('.alerts');
setTimeout(() => {
    alertBox.innerHTML = "New Follower: DuckFan99!";
    alertBox.style.transition = "all 0.5s ease-in-out";
    alertBox.style.transform = "translateX(20px)";
}, 3000);