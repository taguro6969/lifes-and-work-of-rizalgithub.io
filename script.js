// Function to scroll to the "About" section
function scrollToAbout() {
    // Get the "About" section by its ID
    const aboutSection = document.getElementById("about");
    
    // Use smooth scroll behavior to scroll to the About section
    aboutSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Align the section to the top of the page
    });
    function scrollToAbout() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
    
}
