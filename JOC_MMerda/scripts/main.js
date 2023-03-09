var pairs = [];
var colection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var rndm, rndm2, save;

function giveId() {
    for (let i = 0; i < 8; i++) {
        rndm = Math.floor(Math.random() * colection.length);
        save = colection[rndm];
        colection.splice(rndm, 1);
        rndm2 = Math.floor(Math.random() * colection.length);
        pairs.push([save, colection[rndm2]]);
        colection.splice(rndm2, 1);
        console.log(rndm + "," + rndm2);
    }
    console.log(pairs);

    const imgs = document.getElementsByClassName('img');
    for (let i = 0; i < pairs.length; i++) {
        imgs[pairs[i][0]].classList.add(`i${i + 1}`);
        imgs[pairs[i][1]].classList.add(`i${i + 1}`);
        console.log("Pairs" + pairs[i][1] + "," + pairs[i][0]);
    }
}
var times_fliped = 0;
var card1, card2, contw=0;

function flip(img) {
    var cl = img.classList;
    if (!cl.contains('flipout-anim') && !cl.contains('flipin-anim')) {
        if (cl.contains('front')) {
            cl.add('flipout-anim');
            img.onanimationend = () => {
                cl.remove('front');
                cl.remove('flipout-anim');
                cl.add('flipin-anim');
                cl.add('back');
                img.onanimationend = () => {
                    cl.remove('flipin-anim');
                }
            }
        } else if (cl.contains('back')) {
            cl.add('flipout-anim');
            img.onanimationend = () => {
                cl.remove('back');
                cl.remove('flipout-anim');
                cl.add('flipin-anim');
                cl.add('front');
                img.onanimationend = () => {
                    cl.remove('flipin-anim');

                    times_fliped++;
                    if (times_fliped >= 2) {
                        card2 = img;
                        times_fliped = 0;
                        if (card1.className == card2.className) {
                            contw++;
                            if(contw>=8){
                                alert('ole ole lo caracole');
                            }
                        }
                        else{
                            flip(card1);
                            flip(card2);
                        }
                        
                    } else {
                        card1 = img;
                    }

                }
            }
        }
    }



}