
interface jwt {
    user: string | null,
    role: string | null 
}
type myJWT = boolean | jwt;

export const isAuthenticated = () : myJWT =>{
if(typeof window === "undefined"){
    return false;
}else if(localStorage.getItem("jwt") !== null){
    let localjwt : string | null= window.localStorage.getItem("jwt");
    localjwt === null ? localjwt = "" : localjwt.trim();
    const jsw: jwt  = JSON.parse(localjwt);

    if(jsw !== null && jsw !== undefined){
        return true;
    }else{
        return false;
    }
}else{

    return false;
    }

}

export const getIsAuthenticated = () :boolean=>{
    if(typeof window === "undefined"){
        return false;
    }else if(localStorage.getItem("jwt") !== null){
        let localjwt : string | null= window.localStorage.getItem("jwt");
        localjwt === null ? localjwt = "" : localjwt.trim();
        const jsw: jwt  = JSON.parse(localjwt);
    
        if(jsw !== null && jsw !== undefined){
            return true;
        }else{
            return false;
        }
    }else{
    
        return false;
        }
    
    }
