console.log("Good job! You're close, click on the page to find the answer!");

function clicked(e){
    if ((e.x >= 180 && e.x <=220) && (e.y >= 180 && e.y <=220)){
        console.log('%c Winner Winner Chicken Dinner!', 'background: #222; color: #bada55')
    } else if ( e.x > 220){
        console.log('Click more to the left')
    } else if ( e.x < 180){
        console.log('Click more to the right')
    } else if (e.y > 220){
        console.log('Click higher')
    } else if (e.y < 180){
        console.log('Click lower')
    }
}