$(document).ready(function () {
    $('.pic-slider').flickity({
        // options
        prevNextButtons: true,
        contain: true,
        pageDots: false,
        groupCells: true,
        wrapAround: true,
        draggable: true,
        cellAlign: "left",
        arrowShape: "M95.849,46.323H14.1L40.364,20.15a4.166,4.166,0,0,0-5.9-5.881L1.076,47.537a4.162,4.162,0,0,0,0,5.891L34.462,86.7a4.166,4.166,0,0,0,5.9-5.881L14.1,54.642H95.849A4.159,4.159,0,1,0,95.849,46.323Z",
        pauseAutoPlayOnHover: false,
    });
});