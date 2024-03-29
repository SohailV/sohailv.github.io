import * as main from './main.js';

function resetAll() {
    main.values.playerValue = 0;
    main.values.dealerValue = 0;
    main.values.pIsAce = false;
    main.values.dIsAce = false;
    main.tags.reset.disabled = true;
    main.tags.deal.disabled = false;
    main.tags.pscore.textContent = "Player Total: " + main.values.playerValue;
    main.tags.dscore.textContent = "Dealer Total: " + main.values.dealerValue;
    main.tags.dscore.style.cssText = "visibility:hidden;";
    main.tags.bet.value = 0;
    main.tags.bet.setAttribute('title', bet.value) ;
    main.tags.bet.max = main.values.chips;
    main.tags.label.textContent = "Bet Value : 0";
    main.tags.bet.disabled = false;
    main.tags.bet.style.cssText = "color: black;";
    main.values.roundComplete = false;
    main.tags.result.textContent = "Let's Play";
    main.tags.result.style.cssText = "background-color: transparent;"
    let shuffle = document.querySelector('.deck img:nth-child(2)');
    shuffle.style.cssText = "animation-name: willshuffle;";

    while (main.tags.dealer.firstChild) {
        main.tags.dealer.removeChild(main.tags.dealer.firstChild);
    }
    while (main.tags.player.firstChild) {
        main.tags.player.removeChild(main.tags.player.firstChild);
    }
    

       
}

export { resetAll };
