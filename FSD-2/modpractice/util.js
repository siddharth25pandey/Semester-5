
class ValueClass{
    constructor(){
        this.val = 20
    }
}


function getval(vc) {

    return vc.val;
}

function setval(vc,newval) {
    vc.val = newval
}
export default ValueClass
export { setval, getval}






