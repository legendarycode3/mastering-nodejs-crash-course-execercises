import EventEmitter from 'events';


//CREATING AN INSTANCE OF EventEmitter
const emitter = new EventEmitter();


//CREATING SOME HANDLERS (2 functions)
function welcomeHandler(success) {
    console.log(`Hi, legendarycode, good to have you... ${success}`);
}
function relentlessHandler(){
    console.log('I will win, because am relentless');
}




/**
 * REGISTRING AN Event Listener
 */
// emitter.on('Rich Till I Die', () => {
//     console.log('Definitely');
// });
emitter.on('WhatsUp', welcomeHandler);
emitter.on('Victory', relentlessHandler);



/** EMIT  AN EVENT */
emitter.emit('WhatsUp', 'Just BELIEVE');
emitter.emit('Victory');