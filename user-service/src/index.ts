import { initConnection } from "@src/database/connection";

initConnection().then(()=>console.log('entrou'))