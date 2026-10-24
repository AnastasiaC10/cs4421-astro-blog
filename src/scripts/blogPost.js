//left col (pics)
const left = document.getElementById("left-col");
const leftList = left.children;
const leftRect = left.getBoundingClientRect();
const leftHeight = leftRect.height;
console.log(leftHeight);
changeHeights(leftList, leftHeight);

//right col (pic & strava)
const right = document.getElementById("right-col");
const rightList = right.children;
const rightRect = right.getBoundingClientRect();
const rightHeight = rightRect.height;
console.log(rightHeight);
changeHeights(rightList, rightHeight);

function changeHeights(list, height) {
    for (let i=0; i<list.length; i++) {
        let idealHeight = height/list.length;
        let item = list.item(i);

        item.height = idealHeight;
        console.log(item.height);

        if (item.height < idealHeight) {
            let diff = idealHeight - item.height;

            if (i != 0) {
                let margin = diff/4;
                item.style.margin = margin+"px 0px"; //top left (bottom right match)
            }
        }
        
    }
}