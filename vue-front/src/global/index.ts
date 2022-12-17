import { App } from "vue";
import {time} from "./directive";
const directives = {
  time
}

export default (app:App)=>{
  Object.entries(directives).forEach(([name,directive])=>{
    app.directive(name,directive)
  })

}

