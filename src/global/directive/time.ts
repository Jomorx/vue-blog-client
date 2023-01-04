import { formatTime } from "@/utils";
import { DirectiveBinding } from "vue";

export const time =  (el:HTMLSpanElement, binding:DirectiveBinding<Date>)=>{
  if(el.innerText){
    el.innerText = formatTime(el.innerText)
  }
}
