
import Vc, {getval as getv, setval} from './util.js'
console.log ('I like coffee')
let v = new Vc()
console.log(getv(v))
 /*class TestClass {
     #privatefield

     static instances = 0;

     #privatemethod(){
         console.log('i am private')
     }

     constructor(){
         TestClass.instances++;
         this.#privatefield = 20
     }

     getVal(){
         this.#privatemethod()
         return this.#privatefield;
     }
 }
 function TestClass(){
     let privatefield = 20;
     let privatemethod = () => { 
         console.log('I am private')};
     this.getVal = function(){
         privatemethod();
         return privatefield;
     }
     TestClass.instances++;
 }
 let t = new TestClass()
 console.log(TestClass.instances)


*/