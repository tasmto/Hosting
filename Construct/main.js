function module0() {
    openLink('https://umich.instructure.com/courses/368871/modules/items/924282')
}

function module1() {
    openLink('https://umich.instructure.com/courses/368871/modules/items/924294')
}

function module2() {
    openLink('#')
}

function module3() {
    openLink('#')
}


function openLink(link) {
    setTimeout(() => {
        window.top.location.href = link;
    }, 200);

}